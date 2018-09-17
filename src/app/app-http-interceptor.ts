import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class AppHttpInterceptor implements HttpInterceptor {

    static readonly SKIP_TOKEN = "angular-skip-token";

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let reqHeaders = req.headers;
        if (reqHeaders.has(AppHttpInterceptor.SKIP_TOKEN)) {
            reqHeaders = reqHeaders.delete(AppHttpInterceptor.SKIP_TOKEN);
        } else {
            reqHeaders = reqHeaders.set('Authorization', 'Basic ' + sessionStorage.getItem('token'));
        }
        req = req.clone({ headers: reqHeaders });
        return next.handle(req);
    }
}