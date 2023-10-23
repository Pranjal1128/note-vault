import t1 from '../assets/images/Shayan.jpeg';
import t2 from '../assets/images/pranjal.jpeg'
import t3 from '../assets/images/prince.jpg'
import gi1 from '../assets/images/gi1.png';
import gi2 from '../assets/images/gi2.png';
import gi3 from '../assets/images/gi3.png';
import gi4 from '../assets/images/gi4.png';
import gi5 from '../assets/images/gi5.png';
import gi6 from '../assets/images/gi6.png';

const AboutUS = () => {
  return (
      <main className="dashboard">
        <section className="mx-auto h-fit bg-gray-100">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold pt-4">About Us</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-12 justify-center items-center mx-4 lg:mr-1 lg:ml-3">
            <div>
              <img
                className='w-[98%]' 
                src={gi1}
                alt="gi1"
              />
            </div>
            <div>
              <img 
                className='w-[98%]'
                src={gi2}
                alt="gi2"
              />
            </div>
            <div>
              <img 
                className='w-[98%]'
                src={gi3}
                alt="gi3"
              />
            </div>
            <div>
              <img 
                className='w-[98%]'
                src={gi4}
                alt="gi4"
              />
            </div>
            <div>
              <img 
                className='w-[98%]'
                src={gi5}
                alt="gi5"
              />
            </div>
            <div>
              <img 
                className='w-[98%]'
                src={gi6}
                alt="gi6"
              />
            </div>
          </div>
          <div className="text-base mb-16 leading-7 mx-6 text-justify">
            <p className="mb-4">
              We are Team Big3, and our aspiration for creating this project
              was to address the unequal distribution of study materials and
              resources needed for semester exams among students. We hope that
              this website benefits all NIT Raipur students, especially those
              who are stressed about exam preparations.
            </p>
            <p className="mb-4 text-gray-600">
              <a className="text-blue-600 hover:underline" href="/contactus">
                Contact us
              </a>{" "}
              at the provided email address if you encounter any glitches or
              errors.
            </p>
            <p>
              Our plan is to enhance this website with additional features,
              improved functionality, and greater utility.
            </p>
          </div>
          <div className="mb-10 bg-[white]">
            <h2 className="text-4xl font-bold text-center mb-12 pb-3 border-b-2">OUR TEAM</h2>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="w-[20rem] flex flex-col items-center shadow-lg py-4 rounded-xl">
                <img className="w-[50%] mb-4 rounded-full hover:scale-110 shadow-xl transition-transform duration-300 ease-in-out" alt="Member1" src={t1} />
                <div className="text-center">
                  <div className="text-lg font-bold font-sans">Shayan Khan</div>
                  <div className="text-lg font-bold font-sans">Designer,Developer</div>
                </div>
              </div>
              <div className="w-[20rem] flex flex-col items-center shadow-lg py-4 rounded-xl">
                <img className="w-[50%] mb-4  hover:scale-110 transition-transform duration-300 ease-in-out rounded-full" alt="Member2" src={t2} />
                <div className="text-center">
                  <div className="text-lg font-bold font-sans">Pranjal Naman</div>
                  <div className="text-lg font-bold font-sans">Leader, Frontend</div>
                </div>
              </div>
              <div className="w-[20rem] flex flex-col items-center shadow-lg py-4 rounded-xl">
                <img className="w-[50%] mb-4 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out" alt="Member3" src={t3} />
                <div className="text-center">
                  <div className="text-lg font-bold font-sans">Prince Tripathi</div>
                  <div className="text-lg font-bold font-sans">Backend Developer</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default AboutUS;
