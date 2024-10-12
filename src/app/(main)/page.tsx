import BigPoster from "@/components/templates/Index/BigPoster/BigPoster";
import Blogs from "@/components/templates/Index/Blogs/Blogs";
import Brands from "@/components/templates/Index/Brands/Brands";
import Category from "@/components/templates/Index/Category/Category";
import Comments from "@/components/templates/Index/Comments/Comments";
import DealOfDay from "@/components/templates/Index/DealsOfDay/DealsOfDay";
import InfoBoxes from "@/components/templates/Index/InfoBoxes/InfoBoxes";
import Landding from "@/components/templates/Index/Landding/Landding";
import LastestProduct from "@/components/templates/Index/lastestProduct/lastestProduct";
import OfferBoxes from "@/components/templates/Index/OfferBoxes/OfferBoxes";
import TrendingProducts from "@/components/templates/Index/TrendingProducts/TrendingProducts";


export default async function Home() {
    return (
        <>
            <Landding />
            <InfoBoxes />
            <OfferBoxes />
            <Category />
            <LastestProduct/>
            <BigPoster />
            <TrendingProducts/>
            <DealOfDay />
            <LastestProduct/>
            <Brands />
            <Comments />
            <Blogs />
        </>
    )
}
