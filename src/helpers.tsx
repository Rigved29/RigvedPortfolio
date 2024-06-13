import { annotate } from 'rough-notation';


export const addAnnotation = (element: any, annotationtype: any, color = 'white') => {
    const annotation = annotate(element, { type: annotationtype, color: color });
    annotation.show();
}