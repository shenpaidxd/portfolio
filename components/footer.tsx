'use client'

import { Github, Mail, Send } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-border py-8 mt-20 relative z-10 w-full animate-fadeInUp">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-foreground/60 text-sm">© 2026 Senpai DxD. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://github.com/shenpaidxd" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors" suppressHydrationWarning>
                            <Github size={20} />
                        </a>
                        <a href="https://t.me/senpai_dxd" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors" suppressHydrationWarning>
                            <Send size={20} />
                        </a>
                        <a href="mailto:shenpai.dxd@googlemail.com" className="text-foreground/60 hover:text-primary transition-colors" suppressHydrationWarning>
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
