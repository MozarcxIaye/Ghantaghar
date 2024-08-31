import React from 'react'

const LongStay = () => {
    return (
        <>
            <form>

                <div>
                    <select id="district" className='main_select'>
                        <option value="">Select your District</option>
                        <option value="Kathmandu">Kathmandu</option>
                        <option value="Bhaktapur">Bhaktapur</option>
                        <option value="Lalitpur">Lalitpur</option>
                    </select>
                </div>

                <div>
                    <select id="location" className='main_select'>
                        <option value="Select your Location">Select your Location</option>
                        <option value="Airport">Airport</option>
                        <option value="Bhojepokhari">Bhojepokhari</option>
                        <option value="Gourighat">Gourighat</option>
                        <option value="Gaushala">Gaushala</option>
                        <option value="Gwarko">Gwarko</option>
                        <option value="Kaushaltar">Kaushaltar</option>
                        <option value="Patan">Patan</option>
                        <option value="Ratopul">Ratopul</option>
                    </select>
                </div>

                <section className='flex justify-between items-center gap-4 mt-4'>
                    <div>
                        <input type="text" id="check-in" className='sec_select' placeholder="Check in" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} />
                    </div>
                    <div>
                        <input type="text" id="check-out" className="sec_select" placeholder="Check out" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')}
                        />
                    </div>
                    <div>
                        <input type="text" id="guests" className='sec_select' placeholder="No. of Guest" />
                    </div>
                </section>

                <section className='absolute flex justify-center items-center w-[100%] right-0 bottom-[-1.8rem]'>
                    <button type="submit" className='py-4 px-8 bg-orange-400 rounded-lg text-white font-bold '>Search</button>
                </section>
            </form>

        </>
    )
}

export default LongStay