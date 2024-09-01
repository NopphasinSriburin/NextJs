// Mark this file as a client component
"use client";

import { useState } from "react";
import Link from "next/link";
import "./globals.css";

export default function Test() {
    type Section = "about" | "pokemon" | null;

    const [activeSection, setActiveSection] = useState<Section>(null);

    const handleSectionChange = (section: Section) => {
        setActiveSection(section);
    };

    return (
        <main>
            <nav>
                <div className="nav-container">
                    <h1>My Profile</h1>
                    <ul>
                        <li><Link href="/" onClick={() => handleSectionChange(null)}>Home</Link></li>
                        <li><a onClick={() => handleSectionChange("about")}>About Me</a></li>
                        <li><a onClick={() => handleSectionChange("pokemon")}>Pokemon</a></li>
                    </ul>
                </div>
            </nav>
            
            {activeSection === "about" && (
                <section>
                    <iframe src="https://nopphasinsriburin.github.io/Nopphasin.github.io/Home.html" width="100%" height="635px"></iframe>
                </section>
            )}

            {activeSection === "pokemon" && (
                <section>
                    <iframe src="https://nopphasinsriburin.github.io/BackEnd-Code/Pokemon/" width="100%" height="635px"></iframe>
                </section>
            )}
        </main>
    );
}
