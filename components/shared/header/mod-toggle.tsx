"use client"
import { Button } from "@/components/ui/button";
import { 
    DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuContent, 
    DropdownMenuCheckboxItem 
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SunIcon,MoonIcon,SunMoon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const ModToggle = () => {
    const [ mounted,setMounted ] = useState(false);
    useEffect(()=>{
        setMounted(true)
    },[]);
    const {theme,setTheme} = useTheme();
    const ThemeButton = useMemo(()=>{
        if(theme === 'system') return <SunMoon/>
        if(theme === 'dark') return <MoonIcon/>
        return <SunIcon/>
    },[theme]);
    if(!mounted) return null;

    
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className=" focus-visible:ring-0 focus-visible:ring-offset-0">
                {
                    ThemeButton
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent >
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={()=>setTheme('system')}>
                System
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator/>
            <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={()=>setTheme('light')}>
                <DropdownMenuLabel>Light</DropdownMenuLabel>
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator/>
            <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={()=>setTheme('dark')}>
                <DropdownMenuLabel>Dark</DropdownMenuLabel>
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>;
}
 
export default ModToggle;