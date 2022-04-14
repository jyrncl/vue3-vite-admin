export const useImportImage = async (imageUrl: string) => {
    const resultImage = await import(`@/assets/images/1.png`)
    return { resultImage: resultImage.default }
}