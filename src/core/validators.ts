export const ValidateUrl = (url:string) => {


    const urlpattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z0-9]{1,}[\\-\\.]{1})*[a-z0-9]{1,})' + // sub-domain(s)
        '|(([0-9]{1,3}\\.){3}[0-9]{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z0-9+~%_.:;=]*)*');

    return urlpattern.test(url)
}


export const Validatefilename = (filename:string) => {
    return filename.endsWith('.json')
}