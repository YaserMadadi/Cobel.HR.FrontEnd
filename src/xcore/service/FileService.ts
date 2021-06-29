import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { throwError as observableThrowError } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class FileService {

    constructor(private http: HttpClient) { }

    // UpLoadFile(file: File, url: string) {
    //     url = ServiceActions.BaseUrl + url;
    //     console.log('Upload Url : ', url);
    //     const formData: FormData = new FormData();
    //     formData.set('fileName', file);
    //     return this.http.post<NoteAttachment>(url, formData, {
    //         headers: { 'SessionID': StorageController.SessionID },
    //         reportProgress: true,
    //         observe: 'events'
    //     });
    // }

    // downLoadFile(fileStore: FileStore) {
    //     let url = `${ServiceActions.BaseUrl}Core/File/Download/${fileStore.id}`;
    //     return this.http.get(url, {
    //         responseType: 'arraybuffer',
    //         headers: ServiceConfig.InitHeader()
    //     }).subscribe(response => {
    //         let blob = new Blob([response], { type: fileStore.fileType.descriptor });
    //         const objectUrl: string = URL.createObjectURL(blob);
    //         const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;

    //         a.href = objectUrl;
    //         a.download = fileStore.fileName;
    //         document.body.appendChild(a);
    //         a.click();

    //         document.body.removeChild(a);
    //         URL.revokeObjectURL(objectUrl);
    //     });
    // }

    manageError(error) {
        try {
            console.log(error);
            return observableThrowError('');
        }
        catch (er) {
            console.log(`Error in ManageError Event : ${er.message}`);
        }
    }
}