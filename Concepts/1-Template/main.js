function openCvReady(){
    cv["onRuntimeInitialized"]=()=>{
        console.log("OpenCv Ready")
        let imgMain=cv.imread("img-main");
        cv.imshow("main-canvas",imgMain);
        imgMain.delete();
    };
}