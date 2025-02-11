/* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/jpeg;base64,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" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial