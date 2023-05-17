import React from 'react'
import { useParams } from 'react-router-dom';
import Button from '../Components/base/button/button';
import NavBar from '../Components/NavBar';
import SampleData from '../sampleData';

export default function BookDetailsPage() {
    const { id } = useParams();
    return (
        <>
            <div className="flex items-start bg-white w-screen max-h-screen overflow-hidden">
                <div className="container ml-auto mr-auto flex flex-wrap items-start">
                    <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
                        <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-6">
                            Book Details... 📚
                        </h1>
                    </div>

                    {id &&
                        <div className='flex flex-col'>
                            <div className='flex flex-row'>
                                <img loading="eager" src={SampleData[Number(id)].thumbnailUrl?.toString()} style={{
                                    height: "400px",
                                    width: "300px"
                                }} />
                                <div className='flex flex-col items-start justify-start pl-4'>

                                    <span className='text-5xl font-bold'>{SampleData[Number(id)].title}</span>
                                    <span className='text-2xl font-normal mt-4'>{SampleData[Number(id)].author}</span>
                                    <div className='flex flex-row mt-4'>
                                        <span className='text-md font-normal'>Published Year: &nbsp;</span>
                                        <span className='text-md font-bold'> {SampleData[Number(id)].publishedYear}</span>
                                    </div>
                                    <div className='flex flex-row mt-4'>
                                        <span className='text-md font-normal'>Genre: &nbsp;</span>
                                        <span className='text-md font-bold'> {SampleData[Number(id)].genre}</span>
                                    </div>
                                    <div className='flex flex-row mt-4'>
                                        <span className='text-md font-normal'>Total No Of Pages: &nbsp;</span>
                                        <span className='text-md font-bold'> {SampleData[Number(id)].pageCount}</span>
                                    </div>
                                    <div className='flex flex-row mt-4'>
                                        <span className='text-md font-normal'>Rent Per Day:  &nbsp;</span>
                                        <span className='text-md font-bold'> {SampleData[Number(id)].rent}</span>
                                    </div>
                                    <span className='text-md font-semibold mt-20'> {SampleData[Number(id)].shortDescription}</span>
                                </div>
                            </div>
                            <div className='my-10 self-center items-center'>
                                <Button color='primary' className="py-1 md:w-fit h-fit w-full mx-0">{'Add To Cart'}</Button>
                            </div>

                        </div>
                    }

                </div>
            </div>
        </>
    )
}
