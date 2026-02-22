import { motion } from 'framer-motion'
import { Sparkles, Check, Copy, Terminal, ExternalLink, Package } from 'lucide-react'
import { WizardConfig } from './types'

interface CodePanelProps {
    config: WizardConfig
    onCopyCode: () => void
    copied: boolean
    code: string
    updateConfig: (key: keyof WizardConfig, value: any) => void
}

export function CodePanel({ config, onCopyCode, copied, code, updateConfig }: CodePanelProps) {
    return (
        <motion.div 
            key="code"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full space-y-12"
        >
            <div className="p-4 grid gap-4" style={{padding: '1em'}}>
                <div className="flex flex-col gap-6 mb-8">
                    <div className="flex items-center justify-between">
                        <h3 className="panel-section-title !mb-0">Component Code</h3>
                        <div className="badge badge-accent">Auto-generated</div>
                    </div>
                    
                    <div className="segment-group p-1 rounded-2xl bg-bg-subtle border border-border/50">
                        <button 
                            onClick={() => updateConfig('copyType', 'component')}
                            className={`segment-btn py-2.5 rounded-xl text-xs font-bold transition-all ${config.copyType === 'component' ? 'active bg-accent text-white shadow-lg' : 'text-text-muted hover:text-text-secondary'}`}
                        >
                            Component
                        </button>
                        <button 
                            onClick={() => updateConfig('copyType', 'page')}
                            className={`segment-btn py-2.5 rounded-xl text-xs font-bold transition-all ${config.copyType === 'page' ? 'active bg-accent text-white shadow-lg' : 'text-text-muted hover:text-text-secondary'}`}
                        >
                            Full Page
                        </button>
                    </div>
                </div>
                
                <div className="code-block bg-bg-overlay border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative group">
                    <div className="code-block-header border-white/5 mb-6">
                        <div className="flex gap-2.5">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]/40" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/40" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]/40" />
                        </div>
                        <button 
                            onClick={onCopyCode} 
                            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all transform active:scale-90 border border-white/5"
                        >
                            {copied ? <Check size={18} className="text-success" /> : <Copy size={18} className="text-white/60" />}
                        </button>
                    </div>
                    <pre className="text-white selection:bg-accent/40 overflow-x-auto custom-scrollbar">
                        <code className="text-[12px] leading-[1.8] font-mono opacity-90">{code}</code>
                    </pre>
                </div>
            </div>

            <div className="panel-section border-none p-0">
                <h3 className="panel-section-title mb-8">Integration Guide</h3>
                
                <div className="space-y-6">
                    <div className="link-card border border-white/5 bg-bg-raised/40 backdrop-blur-md rounded-[2.5rem] p-8 shadow-sm transition-all hover:bg-bg-raised/60 group">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-14 h-14 rounded-[1.25rem] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-inner">
                                <Package size={24} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-accent font-black uppercase tracking-[0.2em]">Step 01</span>
                                <span className="text-base font-bold text-white/90">Platform Setup</span>
                            </div>
                        </div>
                        
                        <p className="text-[13px] text-white/40 mb-6 leading-relaxed">
                            Install the Flochat component and its core dependencies to unlock liquid interaction performance and structural integrity.
                        </p>

                        <div 
                            onClick={() => {
                                navigator.clipboard.writeText('npm i @flochat/react')
                            }}
                            className="bg-black/40 rounded-2xl font-mono text-[11px] text-accent flex items-center justify-between group/code cursor-pointer hover:bg-black/60 transition-all border border-white/5 group-hover:border-accent/30"
                            style={{
                                padding: '.3em .7em'
                            }}
                        >
                            <code className="opacity-80 font-bold">npm i @flochat/react</code>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] text-white/30 uppercase font-black opacity-0 group-hover/code:opacity-100 transition-all translate-x-2 group-hover/code:translate-x-0">Copy</span>
                                <Copy size={16} className="opacity-30 group-hover/code:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>

                    <div className="link-card border border-white/5 bg-bg-raised/40 backdrop-blur-md rounded-[2.5rem] p-8 shadow-sm transition-all hover:bg-bg-raised/60 group">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-14 h-14 rounded-[1.25rem] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-inner">
                                <ExternalLink size={24} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-accent font-black uppercase tracking-[0.2em]">Step 02</span>
                                <span className="text-base font-bold text-white/90">Live Deployment</span>
                            </div>
                        </div>

                        <p className="text-[13px] text-white/40 mb-6 leading-relaxed">
                            Customize your button using this wizard and paste into your code
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
