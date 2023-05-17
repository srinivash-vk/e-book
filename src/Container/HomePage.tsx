import NavBar from '../Components/NavBar'
import CardLayout from '../Components/CardLayout'
import SampleData from '../sampleData'

export default function HomePage() {

    return (
        <div className='overflow-hidden'>
            <div className="flex items-start bg-white w-screen min-h-screen">
                <div className="container ml-auto mr-auto flex flex-wrap items-start">
                    <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
                        <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6 capitalize">
                            Books you can Explore... 📚
                        </h1>
                    </div>
                    {
                        SampleData.map((eBooks, index) => {
                            return <>
                                <CardLayout
                                    bookId={eBooks.id}
                                    key={index}
                                    bookImage={eBooks.thumbnailUrl}
                                    bookName={eBooks.title.substring(0, 30)}
                                    bookPrice={eBooks.price}
                                    rentPerDay={eBooks.rent}
                                />
                            </>
                        })
                    }
                </div>
            </div>
        </div>

    )
}
