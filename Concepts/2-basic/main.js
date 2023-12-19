function openCvReady(){
    cv["onRuntimeInitialized"]=()=>{
        console.log("OpenCv Ready")
        let imgMain=cv.imread("img-main");
        let imgGray=imgMain.clone();
        let imgBlur=imgMain.clone();
        let imgCanny=imgMain.clone();
        //convert image to grayscale
        cv.cvtColor(imgMain,imgGray,cv.COLOR_RGBA2GRAY,0)
        let ksize= new cv.Size(25,25)
        cv.GaussianBlur(imgMain, imgBlur, ksize, 0)
        //find edges using canny edge detector
        cv.Canny(imgBlur,imgCanny,50,100)
        cv.imshow("main-canvas",imgCanny);
        imgMain.delete();
        imgGray.delete();
        imgBlur.delete();
        imgCanny.delete();
    };
}