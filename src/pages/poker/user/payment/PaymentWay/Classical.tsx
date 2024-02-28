import Payoneer from "./Payoneer"
import Paypal from "./Paypal"
import Stripe from "./Stripe"
import MasterCard from "./MasterCard"
import Visa from "./Visa"

export default function Classical({ price, premiumId, setPayway }: any) {

    return (
        <div
            className="p-4 py-1"
        >
            <div
                className="p-4 py-1 flex justify-start items-center flex-wrap content-start"
            >
                <Paypal
                    way={premiumId}
                    price={price}
                    setPayway={(way: any) => setPayway(way)}
                />
                <Stripe
                    way={premiumId}
                    price={price}
                    setPayway={(way: any) => setPayway(way)}
                />
                <Payoneer
                    way={premiumId}
                    price={price}
                    setPayway={(way: any) => setPayway(way)}
                />
                {/* <MasterCard
                    way={premiumId}
                    price={price}
                    setPayway={(way: any) => setPayway(way)}
                />
                <Visa
                    way={premiumId}
                    price={price}
                    setPayway={(way: any) => setPayway(way)}
                /> */}
            </div>
            {/* <div className="flex justify-center items-center">
                <button type="button" className="btn btn-outline-success px-12">Get Started</button>
            </div> */}
        </div>
    )
}