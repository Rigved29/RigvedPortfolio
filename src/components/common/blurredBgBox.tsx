'use client';
import React from "react";
import { ReactNode } from "react";

const BlurredBgBox = ({ classes = '', children }: { classes?: string, children: React.ReactNode }) => {


    return (
        <div className={`blurredbgBox ${classes}`}>
            {children}
        </div>
    )
}

export default BlurredBgBox;