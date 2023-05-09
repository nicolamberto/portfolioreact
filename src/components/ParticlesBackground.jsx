import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

const ParticlesBackground=()=>{
    const particlesInit = useCallback((engine)=>{
        loadFull(engine)
    },[])

    return (
        <Particles
        options={particlesConfig}
        init={particlesInit}
        >
        </Particles>
       
    )
}

export default ParticlesBackground;