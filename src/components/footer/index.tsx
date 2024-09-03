'use client'
import { socialMediaHandles } from "@/constants";
import { useMediaQuery } from "@/customHooks/useMediaHook";
import Image from "next/image";

const Footer = () => {

    const isMobile = useMediaQuery('(max-width: 550px)');

    return (
        <footer className=" h-max-250 overflow-hidden">
            {/* <div className="ribbon-red"> */}
            <div className={isMobile ? 'ribbon-yellow-mob' : 'ribbon-yellow'}>
                <div className="w-30per margin-block-30 margin-inline-auto d-flex flex-d-col jc-center text-center">
                    <div className="text-left margin-inline-auto">
                        <p>Rigved</p>
                        <p>Shrivastava.</p>
                    </div>
                    <div className="mt-20 d-flex g-10 jc-center">
                        {socialMediaHandles.map((account, i) => {
                            return (
                                <a href={account.link} target="_blank" key={`${i}-${Math.random()}`}>
                                    <Image alt={account.name} src={account.imgPath} width={32} height={32} className="cursor-pointer" />
                                </a>
                            )
                        })}
                    </div>
                    <div className="text-left margin-inline-auto">
                        <p className="color-yellow mt-20">Keep It Simple.</p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </footer>
    )

}

export default Footer;