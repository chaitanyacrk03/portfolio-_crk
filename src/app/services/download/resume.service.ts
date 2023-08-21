// import { Injectable } from '@angular/core';
// import {HttpHeaders,HttpClient} from '@angular/common/http'
// @Injectable({
//   providedIn: 'root'
// })
// export class ResumeService {

//   constructor(private httpClient: HttpClient) { }
//   downloadPDF(dataObj) {

//     let headerOptions = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Accept': 'application/pdf'
//         //   'Accept': 'application/octet-stream', // for excel file
//     });

//     let requestOptions = { headers: headerOptions, responseType: 'blob' as 'blob' };
//     // post or get depending on your requirement
//     this.httpClient.request(serviceURL, dataObj, requestOptions).pipe(map((data: any) => {

//         let blob = new Blob([data], {
//             type: 'application/pdf' // must match the Accept type
//             // type: 'application/octet-stream' // for excel 
//         });
//         var link = document.createElement('a');
//         link.href = window.URL.createObjectURL(blob);
//         link.download = 'samplePDFFile.pdf';
//         link.click();
//         window.URL.revokeObjectURL(link.href);

//     })).subscribe((result: any) => {
//     });

// }
// }
