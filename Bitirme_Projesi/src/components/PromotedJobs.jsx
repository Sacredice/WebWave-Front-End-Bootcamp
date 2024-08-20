import Carousel from 'react-bootstrap/Carousel';
import PromotedJobCard from './PromotedJobCard';

function PromotedJobs() {

    return (
        <div className='px-3 pb-3'>
            <div className='container d-md-none px-0'>
                <Carousel indicators touch>
                    <Carousel.Item>
                        <div>
                            <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />
                            <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />
                            <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />
                            <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />
                            <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ gap: "16px"}}>
                                <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />
                                <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />
                                <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />
                                <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />
                                <PromotedJobCard link={"/https://www.techcareer.net/"} imgSrc={"/company-img1.webp"} job={"Satış Okulu Temsilcisi"} company={"British American Tobacco"} location={"İstanbul"} />

                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>

            <div className='container d-none d-md-block'>

            </div>
        </div>
    )
}

export default PromotedJobs
