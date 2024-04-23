import React from 'react'
import Intramuscular from "../data/intramuscular.jpeg";
import Intravenous from "../data/Intravenous.jpg";
import Intraosseous from "../data/intraosseous.png";

const ProductGridArray = [
    // 0 index
    {
        order: 1,
        image: Intravenous,
        heading: "Intravenous injections",
        description1: "Healthcare professionals use intravenous (IV) injections to give medications directly into a vein. Because a person directly injects the medication into the bloodstream, it allows for rapid absorption, causing an immediate response. ",
        description2: "They may use an intravenous injection to: administer fluid solutions and electrolytes to a person experiencing dehydration, give local and general anesthesia to people having surgery or a procedure, administer pain medications to a person in the emergency room or after surgery, give blood or blood products to a person."
    },
    // 1 index
    {
        order: 4,
        image: Intramuscular,
        heading: "Intramuscular injections ",
        description1: "Doctors can use intramuscular injections to deliver medication into a person’s muscle tissue. The muscles have a rich blood supply, which helps the body absorb the medication quickly.",
        description2: "Common uses for intramuscular injections may include: administering most vaccines, per the Centers for Disease Control and Prevention (CDC)Trusted Source, administering select antibiotics, such as penicillin and streptomycin, giving corticosteroids for inflammation or allergic reactions, administering hormones, such as testosterone and medroxyprogesterone."
    },
    // 2 index
    {
        order: 5,
        image: Intraosseous,
        heading: "Intraosseous injections",
        description1: "Intraosseous injections use a special needle to puncture the bone marrow in order to reach the veins. The bone marrow has a rich blood supply that connects straight to the circulatory system. ",
        description2: " Healthcare professionals use intraosseous injection as the quickest way to give fluids, drugs, and blood products to patients in many emergency situations, such as: severe injuries from an accident or fall, electrocution, a medication overdose, accidental poisoning, stroke, cardiac arrest."
    },
]

const ProductGrid = () => {
  return (

    <div className='pt-[100px] grid ml-[25px] mr-[25px] grid-cols-1'>
        {
            ProductGridArray.map((card, i) => {
                return(
                    <div key={i} className=''
                    >
                        {
                            card.order % 2 === 1 ? 
                            (
                                <div className='flex justify-between items-center pb-[50px]'>
                                    <img src={card.image} className='w-[650px] h-[407px] border-1 border-black'/>
                                    <div className='flex flex-col w-[650px] h-[407px]'>
                                        <h1 className=' font-bold text-3xl text-backgroundColor1'>{card.heading}</h1>
                                        <p className='font-medium text-lg pt-[40px] text-backgroundColor1'>{card.description1}</p>
                                        <p className='font-medium text-lg pt-[40px] text-backgroundColor1'>{card.description2}</p>
                                    </div>
                                </div>
                            ) :
                            (
                                <div className='flex justify-between items-center pb-[50px]'>
                                    <div className='flex flex-col w-[650px] h-[407px]'>
                                        <h1 className='font-bold text-3xl text-backgroundColor1'>{card.heading}</h1>
                                        <p className='font-medium text-lg pt-[40px] text-backgroundColor1'>{card.description1}</p>
                                        <p className='font-medium text-lg pt-[40px] text-backgroundColor1'>{card.description2}</p>
                                    </div>
                                    <img src={card.image} className='w-[650px] h-[407px] border-1 border-black'/>
                                </div>
                            )
                        }
                    </div>

                )
            })
        }
    </div>
  )
}

export default ProductGrid