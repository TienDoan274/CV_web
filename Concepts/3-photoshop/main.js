function openCvReady(){
    cv["onRuntimeInitialized"]=()=>{
        console.log("OpenCv Ready")
        let imgMain=cv.imread("img-main");
        let imgGray=imgMain.clone();
        let imgBlur=imgMain.clone();
        let imgCanny=imgMain.clone();
        document.getElementById("button-rgb").onclick=function(){
            let imgMain=cv.imread("img-main");
            cv.imshow("main-canvas",imgMain);
            imgMain.delete();
        };
        document.getElementById("button-gray").onclick=function(){
            let imgMain=cv.imread("img-main");
            let imgGray=imgMain.clone();
            cv.cvtColor(imgMain,imgGray,cv.COLOR_RGBA2GRAY,0)
            cv.imshow("main-canvas",imgGray);
            imgMain.delete();
            imgGray.delete();
        };
        document.getElementById("button-blur").onclick=function(){
            let imgMain=cv.imread("img-main");
            let imgBlur=imgMain.clone();
            let ksize= new cv.Size(25,25)
            cv.GaussianBlur(imgMain, imgBlur, ksize, 0)
            cv.imshow("main-canvas",imgBlur);
            imgMain.delete();
            imgBlur.delete();
        };
        document.getElementById("button-edge").onclick=function(){
            let imgMain=cv.imread("img-main");
            let imgCanny=imgMain.clone();
            let ksize= new cv.Size(25,25)
            cv.Canny(imgMain,imgCanny,50,100)
            cv.imshow("main-canvas",imgCanny);
            imgMain.delete();
            imgBlur.delete();
        };

        
        //convert image to grayscale
        cv.cvtColor(imgMain,imgGray,cv.COLOR_RGBA2GRAY,0)
        let ksize= new cv.Size(25,25)
        cv.GaussianBlur(imgMain, imgBlur, ksize, 0)
        //find edges using canny edge detector
        cv.Canny(imgBlur,imgCanny,50,100)
        cv.imshow("main-canvas",imgMain);
        imgMain.delete();
        imgGray.delete();
        imgBlur.delete();
        imgCanny.delete();
    };
}
