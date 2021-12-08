import {
  VisualDetailBigImg,
  VisualDetailContents,
  VisualDetailDivide,
  VisualDetailImg,
  VisualDetailTitle,
  VisualDetailType,
  VisualDetailWrapper,
} from "./VisualDetail.style";

const VisualDetailPresenter = () => {
  return (
    <VisualDetailWrapper>
      <VisualDetailImg />
      <VisualDetailType>[데이터 활용]</VisualDetailType>
      <VisualDetailTitle>콜라보올인원 스코어 데이터</VisualDetailTitle>
      <VisualDetailContents>
        내용 머시기내용 머시기내용 머시기내용 머시기내용 머시기내용 머시기내용
        머시기
      </VisualDetailContents>
      <VisualDetailDivide></VisualDetailDivide>
      <VisualDetailBigImg />
    </VisualDetailWrapper>
  );
};

export default VisualDetailPresenter;
