import React from 'react'

const ShortStay = () => {
    return (
        <>
            <form>
                <div>
                    <select id="Purpose" className='main_select '>
                        <option value="">Select your Purpose</option>
                        <option value="Transportation">Transportation's Delay</option>
                        <option value="Birthday">Birthday Celebration</option>
                        <option value="Tourist">Tourist</option>
                        <option value="Personal">Personal Time to chill</option>
                        <option value="Traveler">Traveler's Stay</option>
                        <option value="Couple">Couple's Stay</option>
                        <option value="Family">Families Stay</option>
                        <option value="Friends">Friends Get Together</option>
                        <option value="Emergency">Emergency/Others</option>
                    </select>
                </div>


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

                <section className='flex justify-between items-center flex-wrap mt-4 '>
                    <div className='flex flex-col'>
                        <label htmlFor="check-in">Check in Date</label>
                        <input type="date" id="check-in" className='sec_select' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="time">Time in Hours</label>
                        <input type="date" id="check-out" className='sec_select' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="guests">Number of Guests</label>
                        <input type="number" id="guests" className='sec_select' />
                    </div>
                </section>

                <section className='absolute flex justify-center items-center w-[100%] right-0 bottom-[-1.8rem]'>
                    <button type="submit" className='py-4 px-20 bg-orange-400 rounded-lg text-white font-bold '>Search</button>
                </section>
            </form>
        </>
    )
}

export default ShortStay