import { useState } from "react";
import {
  useDeleteVisualDatumMutation,
  useUpdateVisualDatumMutation,
  useVisualDataConnectionQuery,
  useVisualDataQuery,
} from "../../../commons/graphql/generated";
import WithAdminAuth from "../../common/hocs/withAdminAuth";
import VisualListPresenter from "./VisualList.presenter";

const VisualListContainer = () => {
  //* 페이지 네이션 상태
  const [listInput, setListInput] = useState({
    start: 0,
    limit: 10,
  });

  //* 검색어
  const [search, setSearch] = useState<any>(undefined);

  //* 체크박스
  const [check, setCheck] = useState<any>([]);

  //* 데이터 ID
  const [dataId, setDataId] = useState("");

  //* 삭제 모달
  const [open, setOpen] = useState(false);
  const handleOpen = (e: any) => {
    setOpen(true);
    setDataId(e.target.id);
  };
  const handleClose = () => setOpen(false);

  //* 데이터 변경
  const [updateVisual] = useUpdateVisualDatumMutation();
  //* 데이터 삭제
  const [deleteVisual] = useDeleteVisualDatumMutation();

  //* 데이터 불러오기
  const {
    data: visualList,
    refetch,
    loading: visualListLoading,
  } = useVisualDataQuery({
    variables: {
      start: listInput.start,
      limit: listInput.limit,
      where: {
        _or: [
          {
            title: search,
          },
        ],
      },
      sort: "created_at:desc",
    },
    fetchPolicy: "no-cache",
  });

  //* 데이터 전체 길이
  const { data: visualCount, refetch: CountRefetch } =
    useVisualDataConnectionQuery({
      variables: {
        where: {
          _or: [
            {
              title: search,
            },
          ],
        },
      },
    });

  //* 검색어
  const handleSearch = (e: any) => {
    if (e.target.value === "") {
      setSearch(undefined);
    } else {
      setSearch(e.target.value);
    }
  };

  //* 체크박스 변경
  const handelCheck = (e: any) => {
    let newCheck = [...check];
    if (e.target.checked) {
      newCheck.push(e.target.value);
    } else {
      newCheck = newCheck.filter((data) => data !== e.target.value);
    }
    setCheck(newCheck);
  };

  //* 데이터 삭제
  const handleDeleteVisual = async () => {
    try {
      await Promise.all(
        check.map(async (data: any) => {
          return await deleteVisual({
            variables: {
              input: {
                where: {
                  id: String(data),
                },
              },
            },
          });
        })
      );
      refetch();
      CountRefetch();
      alert("데이터가 삭제 됐습니다.");
    } catch (e) {
      alert("오류가 발생했습니다.");
    }
  };

  //*노출여부 변경
  const handleChangeShow = async (e: any) => {
    const isShow = e.target.value === "true" ? true : false;
    try {
      await updateVisual({
        variables: {
          input: {
            data: {
              isShow,
            },
            where: {
              id: dataId,
            },
          },
        },
      });
      refetch();
    } catch (e) {
      alert("오류가 발생했습니다.");
    } finally {
      handleClose();
    }
  };

  return (
    <VisualListPresenter
      open={open}
      listInput={listInput}
      setListInput={setListInput}
      visualList={visualList}
      visualListLoading={visualListLoading}
      listLength={visualCount?.visualDataConnection?.aggregate?.count}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handelCheck={handelCheck}
      handleSearch={handleSearch}
      handleChangeShow={handleChangeShow}
      handleDeleteVisual={handleDeleteVisual}
    />
  );
};

export default WithAdminAuth(VisualListContainer);
