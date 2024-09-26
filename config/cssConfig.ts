import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export const cssConfig = () => {
    return {
        plugins: [
            tailwindcss(),
            autoprefixer()
        ]
    }
}
