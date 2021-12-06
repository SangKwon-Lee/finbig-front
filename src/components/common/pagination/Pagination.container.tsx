import { PageWrapper, Page, ArrowLeft, ArrowRight } from "./Pagination.style";
import ArrowSVG from "../../../assets/images/arrowDown.svg";
const PaginationContainer = () => {
  return (
    <>
      <PageWrapper>
        <Page>
          <ArrowLeft src={ArrowSVG} style={{ marginRight: "-8px" }} />
          <ArrowLeft src={ArrowSVG} />
        </Page>
        <Page>
          <ArrowLeft src={ArrowSVG} />
        </Page>
        <Page>1</Page>
        <Page>2</Page>
        <Page>
          <ArrowRight src={ArrowSVG} />
          <ArrowRight src={ArrowSVG} style={{ marginLeft: "-8px" }} />
        </Page>
        <Page>
          <ArrowRight src={ArrowSVG} />
        </Page>
      </PageWrapper>
    </>
  );
};

export default PaginationContainer;
