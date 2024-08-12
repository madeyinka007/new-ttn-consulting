import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>
        // <div id="preloader">
        // <div id="ctn-preloader" class="ctn-preloader">
        //     <div class="animation-preloader">
        //         <div class="spinner"></div>
        //             <div class="txt-loading">
        //                 <span data-text-preloader="T" class="letters-loading">
        //                     T
        //                 </span>
        //                 <span data-text-preloader="T" class="letters-loading">
        //                     T
        //                 </span>
        //                 <span data-text-preloader="N" class="letters-loading">
        //                     N
        //                 </span>
        //                 {/* <span data-text-preloader="." class="letters-loading">
        //                     .
        //                 </span>
        //                 <span data-text-preloader="." class="letters-loading">
        //                     .
        //                 </span>
        //                 <span data-text-preloader="." class="letters-loading">
        //                     .
        //                 </span> */}
        //             </div>
        //         </div>
        //         <div class="loader">
        //             <div class="row">
        //                 <div class="col-3 loader-section section-left">
        //                     <div class="bg"></div>
        //                 </div>
        //                 <div class="col-3 loader-section section-left">
        //                     <div class="bg"></div>
        //                 </div>
        //                 <div class="col-3 loader-section section-right">
        //                     <div class="bg"></div>
        //                 </div>
        //                 <div class="col-3 loader-section section-right">
        //                     <div class="bg"></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
      }>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
    </>
    
  );
}

export default App;
