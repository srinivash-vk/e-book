import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface _Props {
    bookImage: string | null,
    bookName: string,
    bookPrice: any,
    bookId: number
    rentPerDay: any
}
export default function CardLayout(props: _Props) {
    const { bookName, bookPrice, bookImage, bookId, rentPerDay } = props
    const navigate = useNavigate();
    const [showAddButton, setShowAddButton] = useState<boolean>(false)

    useEffect(() => {
        if (showAddButton) {
            setShowAddButton(!showAddButton)
        }
    }, [showAddButton])


    return (
        <>
            <div className="md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                <div className="rounded-lg m-h-64 p-2 transform hover:scale-105 hover:shadow-xl transition-all bg-white duration-300 cursor-pointer">
                    <figure onClick={() => { navigate(`/bookDetails/${bookId}`) }} className="mb-2">
                        {bookImage ? <img loading="eager" src={bookImage} alt="" className="h-48 ml-auto mr-auto" /> 
                        : <img loading="eager" src={"https://emis.sikkimedutech.in/genweb/images/no-cover-image.jpg"} alt="" className="h-48 ml-auto mr-auto" />}
                    </figure>
                    <div className="rounded-lg p-4 bg-EB-yellow flex flex-col">
                        <div>
                            <h5 className="text-white text-lg font-bold leading-none flex-none">
                                {bookName}
                            </h5>
                        </div>
                        <div className="text-md mt-2 text-white font-bold">
                            {`${'$'}${rentPerDay} ${` / day`}`}
                        </div>
                        <div className="flex items-center">
                            <div className="text-md text-white font-bold">
                                {`${'$'}${bookPrice}`}
                            </div>

                            <button
                                className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                                onClick={() => {}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="stroke-current m-auto">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
