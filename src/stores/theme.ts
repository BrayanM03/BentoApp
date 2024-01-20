import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

interface State {
    theme: any;
}

export const themeStore = defineStore('theme',{
    state: (): State =>({
        theme: "light"
    
    }),
    actions: {
        changeTheme(theme: string): void{
            
            let actual_theme = localStorage.setItem('theme', theme);
            this.theme = actual_theme
            console.log(localStorage.theme)
        }
    }
})