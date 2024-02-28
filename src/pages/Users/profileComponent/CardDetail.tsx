
export default function CardDetail() {

    return (
        <div className="panel">
            <div className="flex items-center justify-between mb-5">
                <h5 className="font-semibold text-lg dark:text-white-light">Card Details</h5>
            </div>
            <div>
                <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                    <div className="flex items-center justify-between py-2">
                        <div className="flex-none">
                            <img src="/assets/images/card-americanexpress.svg" alt="img" />
                        </div>
                        <div className="flex items-center justify-between flex-auto ltr:ml-4 rtl:mr-4">
                            <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                American Express
                                <span className="block text-white-dark dark:text-white-light">Expires on 12/2025</span>
                            </h6>
                            <span className="badge bg-success ltr:ml-auto rtl:mr-auto">Primary</span>
                        </div>
                    </div>
                </div>
                <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                    <div className="flex items-center justify-between py-2">
                        <div className="flex-none">
                            <img src="/assets/images/card-mastercard.svg" alt="img" />
                        </div>
                        <div className="flex items-center justify-between flex-auto ltr:ml-4 rtl:mr-4">
                            <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                Mastercard
                                <span className="block text-white-dark dark:text-white-light">Expires on 03/2025</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between py-2">
                        <div className="flex-none">
                            <img src="/assets/images/card-visa.svg" alt="img" />
                        </div>
                        <div className="flex items-center justify-between flex-auto ltr:ml-4 rtl:mr-4">
                            <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                Visa
                                <span className="block text-white-dark dark:text-white-light">Expires on 10/2025</span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}