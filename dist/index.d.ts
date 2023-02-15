import * as react from 'react';
import { FunctionComponent, ReactNode } from 'react';

declare function Zwilling<ClassNamesInput = string>({ classNameJoiner, }?: {
    classNameJoiner?: (classNames: ClassNamesInput[]) => string;
}): {
    symbol: (<PropsType = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType & react.SVGProps<SVGSymbolElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGSymbolElement> & PropsType, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_1 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGSymbolElement> & PropsType_1, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_2 = {}>(func: ClassNamesInput | ((props: PropsType_2 & react.SVGProps<SVGSymbolElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGSymbolElement> & PropsType_2, "className"> & {
        className?: ClassNamesInput;
    }>);
    object: (<PropsType_3 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_3 & react.ClassAttributes<HTMLObjectElement> & react.ObjectHTMLAttributes<HTMLObjectElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLObjectElement> & react.ObjectHTMLAttributes<HTMLObjectElement> & PropsType_3, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_4 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLObjectElement> & react.ObjectHTMLAttributes<HTMLObjectElement> & PropsType_4, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_5 = {}>(func: ClassNamesInput | ((props: PropsType_5 & react.ClassAttributes<HTMLObjectElement> & react.ObjectHTMLAttributes<HTMLObjectElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLObjectElement> & react.ObjectHTMLAttributes<HTMLObjectElement> & PropsType_5, "className"> & {
        className?: ClassNamesInput;
    }>);
    a: (<PropsType_6 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_6 & react.ClassAttributes<HTMLAnchorElement> & react.AnchorHTMLAttributes<HTMLAnchorElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLAnchorElement> & react.AnchorHTMLAttributes<HTMLAnchorElement> & PropsType_6, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_7 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLAnchorElement> & react.AnchorHTMLAttributes<HTMLAnchorElement> & PropsType_7, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_8 = {}>(func: ClassNamesInput | ((props: PropsType_8 & react.ClassAttributes<HTMLAnchorElement> & react.AnchorHTMLAttributes<HTMLAnchorElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLAnchorElement> & react.AnchorHTMLAttributes<HTMLAnchorElement> & PropsType_8, "className"> & {
        className?: ClassNamesInput;
    }>);
    abbr: (<PropsType_9 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_9 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_9, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_10 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_10, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_11 = {}>(func: ClassNamesInput | ((props: PropsType_11 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_11, "className"> & {
        className?: ClassNamesInput;
    }>);
    address: (<PropsType_12 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_12 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_12, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_13 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_13, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_14 = {}>(func: ClassNamesInput | ((props: PropsType_14 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_14, "className"> & {
        className?: ClassNamesInput;
    }>);
    area: (<PropsType_15 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_15 & react.ClassAttributes<HTMLAreaElement> & react.AreaHTMLAttributes<HTMLAreaElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLAreaElement> & react.AreaHTMLAttributes<HTMLAreaElement> & PropsType_15, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_16 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLAreaElement> & react.AreaHTMLAttributes<HTMLAreaElement> & PropsType_16, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_17 = {}>(func: ClassNamesInput | ((props: PropsType_17 & react.ClassAttributes<HTMLAreaElement> & react.AreaHTMLAttributes<HTMLAreaElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLAreaElement> & react.AreaHTMLAttributes<HTMLAreaElement> & PropsType_17, "className"> & {
        className?: ClassNamesInput;
    }>);
    article: (<PropsType_18 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_18 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_18, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_19 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_19, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_20 = {}>(func: ClassNamesInput | ((props: PropsType_20 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_20, "className"> & {
        className?: ClassNamesInput;
    }>);
    aside: (<PropsType_21 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_21 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_21, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_22 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_22, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_23 = {}>(func: ClassNamesInput | ((props: PropsType_23 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_23, "className"> & {
        className?: ClassNamesInput;
    }>);
    audio: (<PropsType_24 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_24 & react.ClassAttributes<HTMLAudioElement> & react.AudioHTMLAttributes<HTMLAudioElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLAudioElement> & react.AudioHTMLAttributes<HTMLAudioElement> & PropsType_24, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_25 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLAudioElement> & react.AudioHTMLAttributes<HTMLAudioElement> & PropsType_25, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_26 = {}>(func: ClassNamesInput | ((props: PropsType_26 & react.ClassAttributes<HTMLAudioElement> & react.AudioHTMLAttributes<HTMLAudioElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLAudioElement> & react.AudioHTMLAttributes<HTMLAudioElement> & PropsType_26, "className"> & {
        className?: ClassNamesInput;
    }>);
    b: (<PropsType_27 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_27 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_27, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_28 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_28, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_29 = {}>(func: ClassNamesInput | ((props: PropsType_29 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_29, "className"> & {
        className?: ClassNamesInput;
    }>);
    base: (<PropsType_30 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_30 & react.ClassAttributes<HTMLBaseElement> & react.BaseHTMLAttributes<HTMLBaseElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLBaseElement> & react.BaseHTMLAttributes<HTMLBaseElement> & PropsType_30, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_31 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLBaseElement> & react.BaseHTMLAttributes<HTMLBaseElement> & PropsType_31, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_32 = {}>(func: ClassNamesInput | ((props: PropsType_32 & react.ClassAttributes<HTMLBaseElement> & react.BaseHTMLAttributes<HTMLBaseElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLBaseElement> & react.BaseHTMLAttributes<HTMLBaseElement> & PropsType_32, "className"> & {
        className?: ClassNamesInput;
    }>);
    bdi: (<PropsType_33 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_33 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_33, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_34 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_34, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_35 = {}>(func: ClassNamesInput | ((props: PropsType_35 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_35, "className"> & {
        className?: ClassNamesInput;
    }>);
    bdo: (<PropsType_36 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_36 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_36, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_37 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_37, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_38 = {}>(func: ClassNamesInput | ((props: PropsType_38 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_38, "className"> & {
        className?: ClassNamesInput;
    }>);
    big: (<PropsType_39 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_39 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_39, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_40 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_40, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_41 = {}>(func: ClassNamesInput | ((props: PropsType_41 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_41, "className"> & {
        className?: ClassNamesInput;
    }>);
    blockquote: (<PropsType_42 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_42 & react.ClassAttributes<HTMLQuoteElement> & react.BlockquoteHTMLAttributes<HTMLQuoteElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLQuoteElement> & react.BlockquoteHTMLAttributes<HTMLQuoteElement> & PropsType_42, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_43 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLQuoteElement> & react.BlockquoteHTMLAttributes<HTMLQuoteElement> & PropsType_43, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_44 = {}>(func: ClassNamesInput | ((props: PropsType_44 & react.ClassAttributes<HTMLQuoteElement> & react.BlockquoteHTMLAttributes<HTMLQuoteElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLQuoteElement> & react.BlockquoteHTMLAttributes<HTMLQuoteElement> & PropsType_44, "className"> & {
        className?: ClassNamesInput;
    }>);
    body: (<PropsType_45 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_45 & react.ClassAttributes<HTMLBodyElement> & react.HTMLAttributes<HTMLBodyElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLBodyElement> & react.HTMLAttributes<HTMLBodyElement> & PropsType_45, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_46 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLBodyElement> & react.HTMLAttributes<HTMLBodyElement> & PropsType_46, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_47 = {}>(func: ClassNamesInput | ((props: PropsType_47 & react.ClassAttributes<HTMLBodyElement> & react.HTMLAttributes<HTMLBodyElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLBodyElement> & react.HTMLAttributes<HTMLBodyElement> & PropsType_47, "className"> & {
        className?: ClassNamesInput;
    }>);
    br: (<PropsType_48 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_48 & react.ClassAttributes<HTMLBRElement> & react.HTMLAttributes<HTMLBRElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLBRElement> & react.HTMLAttributes<HTMLBRElement> & PropsType_48, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_49 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLBRElement> & react.HTMLAttributes<HTMLBRElement> & PropsType_49, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_50 = {}>(func: ClassNamesInput | ((props: PropsType_50 & react.ClassAttributes<HTMLBRElement> & react.HTMLAttributes<HTMLBRElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLBRElement> & react.HTMLAttributes<HTMLBRElement> & PropsType_50, "className"> & {
        className?: ClassNamesInput;
    }>);
    button: (<PropsType_51 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_51 & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement> & PropsType_51, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_52 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement> & PropsType_52, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_53 = {}>(func: ClassNamesInput | ((props: PropsType_53 & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement> & PropsType_53, "className"> & {
        className?: ClassNamesInput;
    }>);
    canvas: (<PropsType_54 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_54 & react.ClassAttributes<HTMLCanvasElement> & react.CanvasHTMLAttributes<HTMLCanvasElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLCanvasElement> & react.CanvasHTMLAttributes<HTMLCanvasElement> & PropsType_54, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_55 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLCanvasElement> & react.CanvasHTMLAttributes<HTMLCanvasElement> & PropsType_55, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_56 = {}>(func: ClassNamesInput | ((props: PropsType_56 & react.ClassAttributes<HTMLCanvasElement> & react.CanvasHTMLAttributes<HTMLCanvasElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLCanvasElement> & react.CanvasHTMLAttributes<HTMLCanvasElement> & PropsType_56, "className"> & {
        className?: ClassNamesInput;
    }>);
    caption: (<PropsType_57 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_57 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_57, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_58 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_58, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_59 = {}>(func: ClassNamesInput | ((props: PropsType_59 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_59, "className"> & {
        className?: ClassNamesInput;
    }>);
    center: (<PropsType_60 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_60 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_60, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_61 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_61, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_62 = {}>(func: ClassNamesInput | ((props: PropsType_62 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_62, "className"> & {
        className?: ClassNamesInput;
    }>);
    cite: (<PropsType_63 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_63 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_63, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_64 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_64, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_65 = {}>(func: ClassNamesInput | ((props: PropsType_65 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_65, "className"> & {
        className?: ClassNamesInput;
    }>);
    code: (<PropsType_66 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_66 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_66, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_67 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_67, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_68 = {}>(func: ClassNamesInput | ((props: PropsType_68 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_68, "className"> & {
        className?: ClassNamesInput;
    }>);
    col: (<PropsType_69 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_69 & react.ClassAttributes<HTMLTableColElement> & react.ColHTMLAttributes<HTMLTableColElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableColElement> & react.ColHTMLAttributes<HTMLTableColElement> & PropsType_69, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_70 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTableColElement> & react.ColHTMLAttributes<HTMLTableColElement> & PropsType_70, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_71 = {}>(func: ClassNamesInput | ((props: PropsType_71 & react.ClassAttributes<HTMLTableColElement> & react.ColHTMLAttributes<HTMLTableColElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableColElement> & react.ColHTMLAttributes<HTMLTableColElement> & PropsType_71, "className"> & {
        className?: ClassNamesInput;
    }>);
    colgroup: (<PropsType_72 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_72 & react.ClassAttributes<HTMLTableColElement> & react.ColgroupHTMLAttributes<HTMLTableColElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableColElement> & react.ColgroupHTMLAttributes<HTMLTableColElement> & PropsType_72, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_73 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTableColElement> & react.ColgroupHTMLAttributes<HTMLTableColElement> & PropsType_73, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_74 = {}>(func: ClassNamesInput | ((props: PropsType_74 & react.ClassAttributes<HTMLTableColElement> & react.ColgroupHTMLAttributes<HTMLTableColElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableColElement> & react.ColgroupHTMLAttributes<HTMLTableColElement> & PropsType_74, "className"> & {
        className?: ClassNamesInput;
    }>);
    data: (<PropsType_75 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_75 & react.ClassAttributes<HTMLDataElement> & react.DataHTMLAttributes<HTMLDataElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLDataElement> & react.DataHTMLAttributes<HTMLDataElement> & PropsType_75, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_76 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLDataElement> & react.DataHTMLAttributes<HTMLDataElement> & PropsType_76, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_77 = {}>(func: ClassNamesInput | ((props: PropsType_77 & react.ClassAttributes<HTMLDataElement> & react.DataHTMLAttributes<HTMLDataElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLDataElement> & react.DataHTMLAttributes<HTMLDataElement> & PropsType_77, "className"> & {
        className?: ClassNamesInput;
    }>);
    datalist: (<PropsType_78 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_78 & react.ClassAttributes<HTMLDataListElement> & react.HTMLAttributes<HTMLDataListElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLDataListElement> & react.HTMLAttributes<HTMLDataListElement> & PropsType_78, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_79 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLDataListElement> & react.HTMLAttributes<HTMLDataListElement> & PropsType_79, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_80 = {}>(func: ClassNamesInput | ((props: PropsType_80 & react.ClassAttributes<HTMLDataListElement> & react.HTMLAttributes<HTMLDataListElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLDataListElement> & react.HTMLAttributes<HTMLDataListElement> & PropsType_80, "className"> & {
        className?: ClassNamesInput;
    }>);
    dd: (<PropsType_81 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_81 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_81, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_82 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_82, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_83 = {}>(func: ClassNamesInput | ((props: PropsType_83 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_83, "className"> & {
        className?: ClassNamesInput;
    }>);
    del: (<PropsType_84 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_84 & react.ClassAttributes<HTMLModElement> & react.DelHTMLAttributes<HTMLModElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLModElement> & react.DelHTMLAttributes<HTMLModElement> & PropsType_84, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_85 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLModElement> & react.DelHTMLAttributes<HTMLModElement> & PropsType_85, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_86 = {}>(func: ClassNamesInput | ((props: PropsType_86 & react.ClassAttributes<HTMLModElement> & react.DelHTMLAttributes<HTMLModElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLModElement> & react.DelHTMLAttributes<HTMLModElement> & PropsType_86, "className"> & {
        className?: ClassNamesInput;
    }>);
    details: (<PropsType_87 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_87 & react.ClassAttributes<HTMLDetailsElement> & react.DetailsHTMLAttributes<HTMLDetailsElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLDetailsElement> & react.DetailsHTMLAttributes<HTMLDetailsElement> & PropsType_87, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_88 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLDetailsElement> & react.DetailsHTMLAttributes<HTMLDetailsElement> & PropsType_88, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_89 = {}>(func: ClassNamesInput | ((props: PropsType_89 & react.ClassAttributes<HTMLDetailsElement> & react.DetailsHTMLAttributes<HTMLDetailsElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLDetailsElement> & react.DetailsHTMLAttributes<HTMLDetailsElement> & PropsType_89, "className"> & {
        className?: ClassNamesInput;
    }>);
    dfn: (<PropsType_90 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_90 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_90, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_91 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_91, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_92 = {}>(func: ClassNamesInput | ((props: PropsType_92 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_92, "className"> & {
        className?: ClassNamesInput;
    }>);
    dialog: (<PropsType_93 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_93 & react.ClassAttributes<HTMLDialogElement> & react.DialogHTMLAttributes<HTMLDialogElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLDialogElement> & react.DialogHTMLAttributes<HTMLDialogElement> & PropsType_93, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_94 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLDialogElement> & react.DialogHTMLAttributes<HTMLDialogElement> & PropsType_94, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_95 = {}>(func: ClassNamesInput | ((props: PropsType_95 & react.ClassAttributes<HTMLDialogElement> & react.DialogHTMLAttributes<HTMLDialogElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLDialogElement> & react.DialogHTMLAttributes<HTMLDialogElement> & PropsType_95, "className"> & {
        className?: ClassNamesInput;
    }>);
    div: (<PropsType_96 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_96 & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement> & PropsType_96, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_97 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement> & PropsType_97, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_98 = {}>(func: ClassNamesInput | ((props: PropsType_98 & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement> & PropsType_98, "className"> & {
        className?: ClassNamesInput;
    }>);
    dl: (<PropsType_99 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_99 & react.ClassAttributes<HTMLDListElement> & react.HTMLAttributes<HTMLDListElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLDListElement> & react.HTMLAttributes<HTMLDListElement> & PropsType_99, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_100 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLDListElement> & react.HTMLAttributes<HTMLDListElement> & PropsType_100, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_101 = {}>(func: ClassNamesInput | ((props: PropsType_101 & react.ClassAttributes<HTMLDListElement> & react.HTMLAttributes<HTMLDListElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLDListElement> & react.HTMLAttributes<HTMLDListElement> & PropsType_101, "className"> & {
        className?: ClassNamesInput;
    }>);
    dt: (<PropsType_102 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_102 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_102, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_103 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_103, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_104 = {}>(func: ClassNamesInput | ((props: PropsType_104 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_104, "className"> & {
        className?: ClassNamesInput;
    }>);
    em: (<PropsType_105 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_105 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_105, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_106 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_106, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_107 = {}>(func: ClassNamesInput | ((props: PropsType_107 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_107, "className"> & {
        className?: ClassNamesInput;
    }>);
    embed: (<PropsType_108 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_108 & react.ClassAttributes<HTMLEmbedElement> & react.EmbedHTMLAttributes<HTMLEmbedElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLEmbedElement> & react.EmbedHTMLAttributes<HTMLEmbedElement> & PropsType_108, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_109 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLEmbedElement> & react.EmbedHTMLAttributes<HTMLEmbedElement> & PropsType_109, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_110 = {}>(func: ClassNamesInput | ((props: PropsType_110 & react.ClassAttributes<HTMLEmbedElement> & react.EmbedHTMLAttributes<HTMLEmbedElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLEmbedElement> & react.EmbedHTMLAttributes<HTMLEmbedElement> & PropsType_110, "className"> & {
        className?: ClassNamesInput;
    }>);
    fieldset: (<PropsType_111 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_111 & react.ClassAttributes<HTMLFieldSetElement> & react.FieldsetHTMLAttributes<HTMLFieldSetElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLFieldSetElement> & react.FieldsetHTMLAttributes<HTMLFieldSetElement> & PropsType_111, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_112 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLFieldSetElement> & react.FieldsetHTMLAttributes<HTMLFieldSetElement> & PropsType_112, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_113 = {}>(func: ClassNamesInput | ((props: PropsType_113 & react.ClassAttributes<HTMLFieldSetElement> & react.FieldsetHTMLAttributes<HTMLFieldSetElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLFieldSetElement> & react.FieldsetHTMLAttributes<HTMLFieldSetElement> & PropsType_113, "className"> & {
        className?: ClassNamesInput;
    }>);
    figcaption: (<PropsType_114 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_114 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_114, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_115 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_115, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_116 = {}>(func: ClassNamesInput | ((props: PropsType_116 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_116, "className"> & {
        className?: ClassNamesInput;
    }>);
    figure: (<PropsType_117 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_117 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_117, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_118 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_118, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_119 = {}>(func: ClassNamesInput | ((props: PropsType_119 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_119, "className"> & {
        className?: ClassNamesInput;
    }>);
    footer: (<PropsType_120 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_120 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_120, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_121 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_121, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_122 = {}>(func: ClassNamesInput | ((props: PropsType_122 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_122, "className"> & {
        className?: ClassNamesInput;
    }>);
    form: (<PropsType_123 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_123 & react.ClassAttributes<HTMLFormElement> & react.FormHTMLAttributes<HTMLFormElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLFormElement> & react.FormHTMLAttributes<HTMLFormElement> & PropsType_123, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_124 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLFormElement> & react.FormHTMLAttributes<HTMLFormElement> & PropsType_124, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_125 = {}>(func: ClassNamesInput | ((props: PropsType_125 & react.ClassAttributes<HTMLFormElement> & react.FormHTMLAttributes<HTMLFormElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLFormElement> & react.FormHTMLAttributes<HTMLFormElement> & PropsType_125, "className"> & {
        className?: ClassNamesInput;
    }>);
    h1: (<PropsType_126 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_126 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_126, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_127 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_127, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_128 = {}>(func: ClassNamesInput | ((props: PropsType_128 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_128, "className"> & {
        className?: ClassNamesInput;
    }>);
    h2: (<PropsType_129 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_129 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_129, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_130 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_130, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_131 = {}>(func: ClassNamesInput | ((props: PropsType_131 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_131, "className"> & {
        className?: ClassNamesInput;
    }>);
    h3: (<PropsType_132 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_132 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_132, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_133 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_133, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_134 = {}>(func: ClassNamesInput | ((props: PropsType_134 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_134, "className"> & {
        className?: ClassNamesInput;
    }>);
    h4: (<PropsType_135 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_135 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_135, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_136 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_136, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_137 = {}>(func: ClassNamesInput | ((props: PropsType_137 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_137, "className"> & {
        className?: ClassNamesInput;
    }>);
    h5: (<PropsType_138 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_138 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_138, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_139 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_139, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_140 = {}>(func: ClassNamesInput | ((props: PropsType_140 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_140, "className"> & {
        className?: ClassNamesInput;
    }>);
    h6: (<PropsType_141 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_141 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_141, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_142 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_142, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_143 = {}>(func: ClassNamesInput | ((props: PropsType_143 & react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadingElement> & react.HTMLAttributes<HTMLHeadingElement> & PropsType_143, "className"> & {
        className?: ClassNamesInput;
    }>);
    head: (<PropsType_144 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_144 & react.ClassAttributes<HTMLHeadElement> & react.HTMLAttributes<HTMLHeadElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadElement> & react.HTMLAttributes<HTMLHeadElement> & PropsType_144, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_145 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadElement> & react.HTMLAttributes<HTMLHeadElement> & PropsType_145, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_146 = {}>(func: ClassNamesInput | ((props: PropsType_146 & react.ClassAttributes<HTMLHeadElement> & react.HTMLAttributes<HTMLHeadElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLHeadElement> & react.HTMLAttributes<HTMLHeadElement> & PropsType_146, "className"> & {
        className?: ClassNamesInput;
    }>);
    header: (<PropsType_147 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_147 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_147, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_148 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_148, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_149 = {}>(func: ClassNamesInput | ((props: PropsType_149 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_149, "className"> & {
        className?: ClassNamesInput;
    }>);
    hgroup: (<PropsType_150 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_150 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_150, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_151 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_151, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_152 = {}>(func: ClassNamesInput | ((props: PropsType_152 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_152, "className"> & {
        className?: ClassNamesInput;
    }>);
    hr: (<PropsType_153 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_153 & react.ClassAttributes<HTMLHRElement> & react.HTMLAttributes<HTMLHRElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLHRElement> & react.HTMLAttributes<HTMLHRElement> & PropsType_153, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_154 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLHRElement> & react.HTMLAttributes<HTMLHRElement> & PropsType_154, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_155 = {}>(func: ClassNamesInput | ((props: PropsType_155 & react.ClassAttributes<HTMLHRElement> & react.HTMLAttributes<HTMLHRElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLHRElement> & react.HTMLAttributes<HTMLHRElement> & PropsType_155, "className"> & {
        className?: ClassNamesInput;
    }>);
    html: (<PropsType_156 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_156 & react.ClassAttributes<HTMLHtmlElement> & react.HtmlHTMLAttributes<HTMLHtmlElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLHtmlElement> & react.HtmlHTMLAttributes<HTMLHtmlElement> & PropsType_156, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_157 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLHtmlElement> & react.HtmlHTMLAttributes<HTMLHtmlElement> & PropsType_157, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_158 = {}>(func: ClassNamesInput | ((props: PropsType_158 & react.ClassAttributes<HTMLHtmlElement> & react.HtmlHTMLAttributes<HTMLHtmlElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLHtmlElement> & react.HtmlHTMLAttributes<HTMLHtmlElement> & PropsType_158, "className"> & {
        className?: ClassNamesInput;
    }>);
    i: (<PropsType_159 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_159 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_159, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_160 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_160, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_161 = {}>(func: ClassNamesInput | ((props: PropsType_161 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_161, "className"> & {
        className?: ClassNamesInput;
    }>);
    iframe: (<PropsType_162 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_162 & react.ClassAttributes<HTMLIFrameElement> & react.IframeHTMLAttributes<HTMLIFrameElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLIFrameElement> & react.IframeHTMLAttributes<HTMLIFrameElement> & PropsType_162, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_163 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLIFrameElement> & react.IframeHTMLAttributes<HTMLIFrameElement> & PropsType_163, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_164 = {}>(func: ClassNamesInput | ((props: PropsType_164 & react.ClassAttributes<HTMLIFrameElement> & react.IframeHTMLAttributes<HTMLIFrameElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLIFrameElement> & react.IframeHTMLAttributes<HTMLIFrameElement> & PropsType_164, "className"> & {
        className?: ClassNamesInput;
    }>);
    img: (<PropsType_165 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_165 & react.ClassAttributes<HTMLImageElement> & react.ImgHTMLAttributes<HTMLImageElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLImageElement> & react.ImgHTMLAttributes<HTMLImageElement> & PropsType_165, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_166 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLImageElement> & react.ImgHTMLAttributes<HTMLImageElement> & PropsType_166, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_167 = {}>(func: ClassNamesInput | ((props: PropsType_167 & react.ClassAttributes<HTMLImageElement> & react.ImgHTMLAttributes<HTMLImageElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLImageElement> & react.ImgHTMLAttributes<HTMLImageElement> & PropsType_167, "className"> & {
        className?: ClassNamesInput;
    }>);
    input: (<PropsType_168 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_168 & react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement> & PropsType_168, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_169 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement> & PropsType_169, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_170 = {}>(func: ClassNamesInput | ((props: PropsType_170 & react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement> & PropsType_170, "className"> & {
        className?: ClassNamesInput;
    }>);
    ins: (<PropsType_171 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_171 & react.ClassAttributes<HTMLModElement> & react.InsHTMLAttributes<HTMLModElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLModElement> & react.InsHTMLAttributes<HTMLModElement> & PropsType_171, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_172 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLModElement> & react.InsHTMLAttributes<HTMLModElement> & PropsType_172, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_173 = {}>(func: ClassNamesInput | ((props: PropsType_173 & react.ClassAttributes<HTMLModElement> & react.InsHTMLAttributes<HTMLModElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLModElement> & react.InsHTMLAttributes<HTMLModElement> & PropsType_173, "className"> & {
        className?: ClassNamesInput;
    }>);
    kbd: (<PropsType_174 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_174 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_174, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_175 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_175, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_176 = {}>(func: ClassNamesInput | ((props: PropsType_176 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_176, "className"> & {
        className?: ClassNamesInput;
    }>);
    keygen: (<PropsType_177 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_177 & react.ClassAttributes<HTMLElement> & react.KeygenHTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.KeygenHTMLAttributes<HTMLElement> & PropsType_177, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_178 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.KeygenHTMLAttributes<HTMLElement> & PropsType_178, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_179 = {}>(func: ClassNamesInput | ((props: PropsType_179 & react.ClassAttributes<HTMLElement> & react.KeygenHTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.KeygenHTMLAttributes<HTMLElement> & PropsType_179, "className"> & {
        className?: ClassNamesInput;
    }>);
    label: (<PropsType_180 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_180 & react.ClassAttributes<HTMLLabelElement> & react.LabelHTMLAttributes<HTMLLabelElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLLabelElement> & react.LabelHTMLAttributes<HTMLLabelElement> & PropsType_180, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_181 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLLabelElement> & react.LabelHTMLAttributes<HTMLLabelElement> & PropsType_181, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_182 = {}>(func: ClassNamesInput | ((props: PropsType_182 & react.ClassAttributes<HTMLLabelElement> & react.LabelHTMLAttributes<HTMLLabelElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLLabelElement> & react.LabelHTMLAttributes<HTMLLabelElement> & PropsType_182, "className"> & {
        className?: ClassNamesInput;
    }>);
    legend: (<PropsType_183 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_183 & react.ClassAttributes<HTMLLegendElement> & react.HTMLAttributes<HTMLLegendElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLLegendElement> & react.HTMLAttributes<HTMLLegendElement> & PropsType_183, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_184 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLLegendElement> & react.HTMLAttributes<HTMLLegendElement> & PropsType_184, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_185 = {}>(func: ClassNamesInput | ((props: PropsType_185 & react.ClassAttributes<HTMLLegendElement> & react.HTMLAttributes<HTMLLegendElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLLegendElement> & react.HTMLAttributes<HTMLLegendElement> & PropsType_185, "className"> & {
        className?: ClassNamesInput;
    }>);
    li: (<PropsType_186 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_186 & react.ClassAttributes<HTMLLIElement> & react.LiHTMLAttributes<HTMLLIElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLLIElement> & react.LiHTMLAttributes<HTMLLIElement> & PropsType_186, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_187 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLLIElement> & react.LiHTMLAttributes<HTMLLIElement> & PropsType_187, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_188 = {}>(func: ClassNamesInput | ((props: PropsType_188 & react.ClassAttributes<HTMLLIElement> & react.LiHTMLAttributes<HTMLLIElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLLIElement> & react.LiHTMLAttributes<HTMLLIElement> & PropsType_188, "className"> & {
        className?: ClassNamesInput;
    }>);
    link: (<PropsType_189 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_189 & react.ClassAttributes<HTMLLinkElement> & react.LinkHTMLAttributes<HTMLLinkElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLLinkElement> & react.LinkHTMLAttributes<HTMLLinkElement> & PropsType_189, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_190 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLLinkElement> & react.LinkHTMLAttributes<HTMLLinkElement> & PropsType_190, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_191 = {}>(func: ClassNamesInput | ((props: PropsType_191 & react.ClassAttributes<HTMLLinkElement> & react.LinkHTMLAttributes<HTMLLinkElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLLinkElement> & react.LinkHTMLAttributes<HTMLLinkElement> & PropsType_191, "className"> & {
        className?: ClassNamesInput;
    }>);
    main: (<PropsType_192 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_192 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_192, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_193 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_193, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_194 = {}>(func: ClassNamesInput | ((props: PropsType_194 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_194, "className"> & {
        className?: ClassNamesInput;
    }>);
    map: (<PropsType_195 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_195 & react.ClassAttributes<HTMLMapElement> & react.MapHTMLAttributes<HTMLMapElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLMapElement> & react.MapHTMLAttributes<HTMLMapElement> & PropsType_195, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_196 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLMapElement> & react.MapHTMLAttributes<HTMLMapElement> & PropsType_196, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_197 = {}>(func: ClassNamesInput | ((props: PropsType_197 & react.ClassAttributes<HTMLMapElement> & react.MapHTMLAttributes<HTMLMapElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLMapElement> & react.MapHTMLAttributes<HTMLMapElement> & PropsType_197, "className"> & {
        className?: ClassNamesInput;
    }>);
    mark: (<PropsType_198 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_198 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_198, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_199 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_199, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_200 = {}>(func: ClassNamesInput | ((props: PropsType_200 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_200, "className"> & {
        className?: ClassNamesInput;
    }>);
    menu: (<PropsType_201 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_201 & react.ClassAttributes<HTMLElement> & react.MenuHTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.MenuHTMLAttributes<HTMLElement> & PropsType_201, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_202 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.MenuHTMLAttributes<HTMLElement> & PropsType_202, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_203 = {}>(func: ClassNamesInput | ((props: PropsType_203 & react.ClassAttributes<HTMLElement> & react.MenuHTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.MenuHTMLAttributes<HTMLElement> & PropsType_203, "className"> & {
        className?: ClassNamesInput;
    }>);
    menuitem: (<PropsType_204 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_204 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_204, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_205 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_205, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_206 = {}>(func: ClassNamesInput | ((props: PropsType_206 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_206, "className"> & {
        className?: ClassNamesInput;
    }>);
    meta: (<PropsType_207 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_207 & react.ClassAttributes<HTMLMetaElement> & react.MetaHTMLAttributes<HTMLMetaElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLMetaElement> & react.MetaHTMLAttributes<HTMLMetaElement> & PropsType_207, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_208 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLMetaElement> & react.MetaHTMLAttributes<HTMLMetaElement> & PropsType_208, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_209 = {}>(func: ClassNamesInput | ((props: PropsType_209 & react.ClassAttributes<HTMLMetaElement> & react.MetaHTMLAttributes<HTMLMetaElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLMetaElement> & react.MetaHTMLAttributes<HTMLMetaElement> & PropsType_209, "className"> & {
        className?: ClassNamesInput;
    }>);
    meter: (<PropsType_210 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_210 & react.ClassAttributes<HTMLMeterElement> & react.MeterHTMLAttributes<HTMLMeterElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLMeterElement> & react.MeterHTMLAttributes<HTMLMeterElement> & PropsType_210, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_211 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLMeterElement> & react.MeterHTMLAttributes<HTMLMeterElement> & PropsType_211, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_212 = {}>(func: ClassNamesInput | ((props: PropsType_212 & react.ClassAttributes<HTMLMeterElement> & react.MeterHTMLAttributes<HTMLMeterElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLMeterElement> & react.MeterHTMLAttributes<HTMLMeterElement> & PropsType_212, "className"> & {
        className?: ClassNamesInput;
    }>);
    nav: (<PropsType_213 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_213 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_213, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_214 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_214, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_215 = {}>(func: ClassNamesInput | ((props: PropsType_215 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_215, "className"> & {
        className?: ClassNamesInput;
    }>);
    noindex: (<PropsType_216 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_216 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_216, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_217 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_217, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_218 = {}>(func: ClassNamesInput | ((props: PropsType_218 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_218, "className"> & {
        className?: ClassNamesInput;
    }>);
    noscript: (<PropsType_219 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_219 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_219, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_220 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_220, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_221 = {}>(func: ClassNamesInput | ((props: PropsType_221 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_221, "className"> & {
        className?: ClassNamesInput;
    }>);
    ol: (<PropsType_222 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_222 & react.ClassAttributes<HTMLOListElement> & react.OlHTMLAttributes<HTMLOListElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLOListElement> & react.OlHTMLAttributes<HTMLOListElement> & PropsType_222, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_223 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLOListElement> & react.OlHTMLAttributes<HTMLOListElement> & PropsType_223, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_224 = {}>(func: ClassNamesInput | ((props: PropsType_224 & react.ClassAttributes<HTMLOListElement> & react.OlHTMLAttributes<HTMLOListElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLOListElement> & react.OlHTMLAttributes<HTMLOListElement> & PropsType_224, "className"> & {
        className?: ClassNamesInput;
    }>);
    optgroup: (<PropsType_225 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_225 & react.ClassAttributes<HTMLOptGroupElement> & react.OptgroupHTMLAttributes<HTMLOptGroupElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLOptGroupElement> & react.OptgroupHTMLAttributes<HTMLOptGroupElement> & PropsType_225, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_226 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLOptGroupElement> & react.OptgroupHTMLAttributes<HTMLOptGroupElement> & PropsType_226, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_227 = {}>(func: ClassNamesInput | ((props: PropsType_227 & react.ClassAttributes<HTMLOptGroupElement> & react.OptgroupHTMLAttributes<HTMLOptGroupElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLOptGroupElement> & react.OptgroupHTMLAttributes<HTMLOptGroupElement> & PropsType_227, "className"> & {
        className?: ClassNamesInput;
    }>);
    option: (<PropsType_228 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_228 & react.ClassAttributes<HTMLOptionElement> & react.OptionHTMLAttributes<HTMLOptionElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLOptionElement> & react.OptionHTMLAttributes<HTMLOptionElement> & PropsType_228, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_229 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLOptionElement> & react.OptionHTMLAttributes<HTMLOptionElement> & PropsType_229, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_230 = {}>(func: ClassNamesInput | ((props: PropsType_230 & react.ClassAttributes<HTMLOptionElement> & react.OptionHTMLAttributes<HTMLOptionElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLOptionElement> & react.OptionHTMLAttributes<HTMLOptionElement> & PropsType_230, "className"> & {
        className?: ClassNamesInput;
    }>);
    output: (<PropsType_231 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_231 & react.ClassAttributes<HTMLOutputElement> & react.OutputHTMLAttributes<HTMLOutputElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLOutputElement> & react.OutputHTMLAttributes<HTMLOutputElement> & PropsType_231, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_232 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLOutputElement> & react.OutputHTMLAttributes<HTMLOutputElement> & PropsType_232, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_233 = {}>(func: ClassNamesInput | ((props: PropsType_233 & react.ClassAttributes<HTMLOutputElement> & react.OutputHTMLAttributes<HTMLOutputElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLOutputElement> & react.OutputHTMLAttributes<HTMLOutputElement> & PropsType_233, "className"> & {
        className?: ClassNamesInput;
    }>);
    p: (<PropsType_234 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_234 & react.ClassAttributes<HTMLParagraphElement> & react.HTMLAttributes<HTMLParagraphElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLParagraphElement> & react.HTMLAttributes<HTMLParagraphElement> & PropsType_234, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_235 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLParagraphElement> & react.HTMLAttributes<HTMLParagraphElement> & PropsType_235, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_236 = {}>(func: ClassNamesInput | ((props: PropsType_236 & react.ClassAttributes<HTMLParagraphElement> & react.HTMLAttributes<HTMLParagraphElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLParagraphElement> & react.HTMLAttributes<HTMLParagraphElement> & PropsType_236, "className"> & {
        className?: ClassNamesInput;
    }>);
    param: (<PropsType_237 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_237 & react.ClassAttributes<HTMLParamElement> & react.ParamHTMLAttributes<HTMLParamElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLParamElement> & react.ParamHTMLAttributes<HTMLParamElement> & PropsType_237, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_238 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLParamElement> & react.ParamHTMLAttributes<HTMLParamElement> & PropsType_238, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_239 = {}>(func: ClassNamesInput | ((props: PropsType_239 & react.ClassAttributes<HTMLParamElement> & react.ParamHTMLAttributes<HTMLParamElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLParamElement> & react.ParamHTMLAttributes<HTMLParamElement> & PropsType_239, "className"> & {
        className?: ClassNamesInput;
    }>);
    picture: (<PropsType_240 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_240 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_240, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_241 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_241, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_242 = {}>(func: ClassNamesInput | ((props: PropsType_242 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_242, "className"> & {
        className?: ClassNamesInput;
    }>);
    pre: (<PropsType_243 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_243 & react.ClassAttributes<HTMLPreElement> & react.HTMLAttributes<HTMLPreElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLPreElement> & react.HTMLAttributes<HTMLPreElement> & PropsType_243, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_244 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLPreElement> & react.HTMLAttributes<HTMLPreElement> & PropsType_244, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_245 = {}>(func: ClassNamesInput | ((props: PropsType_245 & react.ClassAttributes<HTMLPreElement> & react.HTMLAttributes<HTMLPreElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLPreElement> & react.HTMLAttributes<HTMLPreElement> & PropsType_245, "className"> & {
        className?: ClassNamesInput;
    }>);
    progress: (<PropsType_246 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_246 & react.ClassAttributes<HTMLProgressElement> & react.ProgressHTMLAttributes<HTMLProgressElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLProgressElement> & react.ProgressHTMLAttributes<HTMLProgressElement> & PropsType_246, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_247 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLProgressElement> & react.ProgressHTMLAttributes<HTMLProgressElement> & PropsType_247, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_248 = {}>(func: ClassNamesInput | ((props: PropsType_248 & react.ClassAttributes<HTMLProgressElement> & react.ProgressHTMLAttributes<HTMLProgressElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLProgressElement> & react.ProgressHTMLAttributes<HTMLProgressElement> & PropsType_248, "className"> & {
        className?: ClassNamesInput;
    }>);
    q: (<PropsType_249 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_249 & react.ClassAttributes<HTMLQuoteElement> & react.QuoteHTMLAttributes<HTMLQuoteElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLQuoteElement> & react.QuoteHTMLAttributes<HTMLQuoteElement> & PropsType_249, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_250 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLQuoteElement> & react.QuoteHTMLAttributes<HTMLQuoteElement> & PropsType_250, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_251 = {}>(func: ClassNamesInput | ((props: PropsType_251 & react.ClassAttributes<HTMLQuoteElement> & react.QuoteHTMLAttributes<HTMLQuoteElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLQuoteElement> & react.QuoteHTMLAttributes<HTMLQuoteElement> & PropsType_251, "className"> & {
        className?: ClassNamesInput;
    }>);
    rp: (<PropsType_252 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_252 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_252, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_253 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_253, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_254 = {}>(func: ClassNamesInput | ((props: PropsType_254 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_254, "className"> & {
        className?: ClassNamesInput;
    }>);
    rt: (<PropsType_255 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_255 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_255, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_256 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_256, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_257 = {}>(func: ClassNamesInput | ((props: PropsType_257 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_257, "className"> & {
        className?: ClassNamesInput;
    }>);
    ruby: (<PropsType_258 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_258 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_258, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_259 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_259, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_260 = {}>(func: ClassNamesInput | ((props: PropsType_260 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_260, "className"> & {
        className?: ClassNamesInput;
    }>);
    s: (<PropsType_261 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_261 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_261, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_262 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_262, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_263 = {}>(func: ClassNamesInput | ((props: PropsType_263 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_263, "className"> & {
        className?: ClassNamesInput;
    }>);
    samp: (<PropsType_264 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_264 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_264, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_265 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_265, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_266 = {}>(func: ClassNamesInput | ((props: PropsType_266 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_266, "className"> & {
        className?: ClassNamesInput;
    }>);
    slot: (<PropsType_267 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_267 & react.ClassAttributes<HTMLSlotElement> & react.SlotHTMLAttributes<HTMLSlotElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLSlotElement> & react.SlotHTMLAttributes<HTMLSlotElement> & PropsType_267, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_268 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLSlotElement> & react.SlotHTMLAttributes<HTMLSlotElement> & PropsType_268, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_269 = {}>(func: ClassNamesInput | ((props: PropsType_269 & react.ClassAttributes<HTMLSlotElement> & react.SlotHTMLAttributes<HTMLSlotElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLSlotElement> & react.SlotHTMLAttributes<HTMLSlotElement> & PropsType_269, "className"> & {
        className?: ClassNamesInput;
    }>);
    script: (<PropsType_270 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_270 & react.ClassAttributes<HTMLScriptElement> & react.ScriptHTMLAttributes<HTMLScriptElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLScriptElement> & react.ScriptHTMLAttributes<HTMLScriptElement> & PropsType_270, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_271 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLScriptElement> & react.ScriptHTMLAttributes<HTMLScriptElement> & PropsType_271, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_272 = {}>(func: ClassNamesInput | ((props: PropsType_272 & react.ClassAttributes<HTMLScriptElement> & react.ScriptHTMLAttributes<HTMLScriptElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLScriptElement> & react.ScriptHTMLAttributes<HTMLScriptElement> & PropsType_272, "className"> & {
        className?: ClassNamesInput;
    }>);
    section: (<PropsType_273 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_273 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_273, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_274 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_274, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_275 = {}>(func: ClassNamesInput | ((props: PropsType_275 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_275, "className"> & {
        className?: ClassNamesInput;
    }>);
    select: (<PropsType_276 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_276 & react.ClassAttributes<HTMLSelectElement> & react.SelectHTMLAttributes<HTMLSelectElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLSelectElement> & react.SelectHTMLAttributes<HTMLSelectElement> & PropsType_276, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_277 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLSelectElement> & react.SelectHTMLAttributes<HTMLSelectElement> & PropsType_277, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_278 = {}>(func: ClassNamesInput | ((props: PropsType_278 & react.ClassAttributes<HTMLSelectElement> & react.SelectHTMLAttributes<HTMLSelectElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLSelectElement> & react.SelectHTMLAttributes<HTMLSelectElement> & PropsType_278, "className"> & {
        className?: ClassNamesInput;
    }>);
    small: (<PropsType_279 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_279 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_279, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_280 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_280, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_281 = {}>(func: ClassNamesInput | ((props: PropsType_281 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_281, "className"> & {
        className?: ClassNamesInput;
    }>);
    source: (<PropsType_282 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_282 & react.ClassAttributes<HTMLSourceElement> & react.SourceHTMLAttributes<HTMLSourceElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLSourceElement> & react.SourceHTMLAttributes<HTMLSourceElement> & PropsType_282, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_283 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLSourceElement> & react.SourceHTMLAttributes<HTMLSourceElement> & PropsType_283, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_284 = {}>(func: ClassNamesInput | ((props: PropsType_284 & react.ClassAttributes<HTMLSourceElement> & react.SourceHTMLAttributes<HTMLSourceElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLSourceElement> & react.SourceHTMLAttributes<HTMLSourceElement> & PropsType_284, "className"> & {
        className?: ClassNamesInput;
    }>);
    span: (<PropsType_285 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_285 & react.ClassAttributes<HTMLSpanElement> & react.HTMLAttributes<HTMLSpanElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLSpanElement> & react.HTMLAttributes<HTMLSpanElement> & PropsType_285, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_286 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLSpanElement> & react.HTMLAttributes<HTMLSpanElement> & PropsType_286, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_287 = {}>(func: ClassNamesInput | ((props: PropsType_287 & react.ClassAttributes<HTMLSpanElement> & react.HTMLAttributes<HTMLSpanElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLSpanElement> & react.HTMLAttributes<HTMLSpanElement> & PropsType_287, "className"> & {
        className?: ClassNamesInput;
    }>);
    strong: (<PropsType_288 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_288 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_288, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_289 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_289, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_290 = {}>(func: ClassNamesInput | ((props: PropsType_290 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_290, "className"> & {
        className?: ClassNamesInput;
    }>);
    style: (<PropsType_291 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_291 & react.ClassAttributes<HTMLStyleElement> & react.StyleHTMLAttributes<HTMLStyleElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLStyleElement> & react.StyleHTMLAttributes<HTMLStyleElement> & PropsType_291, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_292 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLStyleElement> & react.StyleHTMLAttributes<HTMLStyleElement> & PropsType_292, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_293 = {}>(func: ClassNamesInput | ((props: PropsType_293 & react.ClassAttributes<HTMLStyleElement> & react.StyleHTMLAttributes<HTMLStyleElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLStyleElement> & react.StyleHTMLAttributes<HTMLStyleElement> & PropsType_293, "className"> & {
        className?: ClassNamesInput;
    }>);
    sub: (<PropsType_294 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_294 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_294, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_295 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_295, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_296 = {}>(func: ClassNamesInput | ((props: PropsType_296 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_296, "className"> & {
        className?: ClassNamesInput;
    }>);
    summary: (<PropsType_297 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_297 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_297, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_298 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_298, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_299 = {}>(func: ClassNamesInput | ((props: PropsType_299 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_299, "className"> & {
        className?: ClassNamesInput;
    }>);
    sup: (<PropsType_300 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_300 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_300, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_301 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_301, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_302 = {}>(func: ClassNamesInput | ((props: PropsType_302 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_302, "className"> & {
        className?: ClassNamesInput;
    }>);
    table: (<PropsType_303 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_303 & react.ClassAttributes<HTMLTableElement> & react.TableHTMLAttributes<HTMLTableElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableElement> & react.TableHTMLAttributes<HTMLTableElement> & PropsType_303, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_304 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTableElement> & react.TableHTMLAttributes<HTMLTableElement> & PropsType_304, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_305 = {}>(func: ClassNamesInput | ((props: PropsType_305 & react.ClassAttributes<HTMLTableElement> & react.TableHTMLAttributes<HTMLTableElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableElement> & react.TableHTMLAttributes<HTMLTableElement> & PropsType_305, "className"> & {
        className?: ClassNamesInput;
    }>);
    template: (<PropsType_306 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_306 & react.ClassAttributes<HTMLTemplateElement> & react.HTMLAttributes<HTMLTemplateElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTemplateElement> & react.HTMLAttributes<HTMLTemplateElement> & PropsType_306, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_307 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTemplateElement> & react.HTMLAttributes<HTMLTemplateElement> & PropsType_307, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_308 = {}>(func: ClassNamesInput | ((props: PropsType_308 & react.ClassAttributes<HTMLTemplateElement> & react.HTMLAttributes<HTMLTemplateElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTemplateElement> & react.HTMLAttributes<HTMLTemplateElement> & PropsType_308, "className"> & {
        className?: ClassNamesInput;
    }>);
    tbody: (<PropsType_309 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_309 & react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement> & PropsType_309, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_310 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement> & PropsType_310, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_311 = {}>(func: ClassNamesInput | ((props: PropsType_311 & react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement> & PropsType_311, "className"> & {
        className?: ClassNamesInput;
    }>);
    td: (<PropsType_312 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_312 & react.ClassAttributes<HTMLTableDataCellElement> & react.TdHTMLAttributes<HTMLTableDataCellElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableDataCellElement> & react.TdHTMLAttributes<HTMLTableDataCellElement> & PropsType_312, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_313 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTableDataCellElement> & react.TdHTMLAttributes<HTMLTableDataCellElement> & PropsType_313, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_314 = {}>(func: ClassNamesInput | ((props: PropsType_314 & react.ClassAttributes<HTMLTableDataCellElement> & react.TdHTMLAttributes<HTMLTableDataCellElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableDataCellElement> & react.TdHTMLAttributes<HTMLTableDataCellElement> & PropsType_314, "className"> & {
        className?: ClassNamesInput;
    }>);
    textarea: (<PropsType_315 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_315 & react.ClassAttributes<HTMLTextAreaElement> & react.TextareaHTMLAttributes<HTMLTextAreaElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTextAreaElement> & react.TextareaHTMLAttributes<HTMLTextAreaElement> & PropsType_315, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_316 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTextAreaElement> & react.TextareaHTMLAttributes<HTMLTextAreaElement> & PropsType_316, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_317 = {}>(func: ClassNamesInput | ((props: PropsType_317 & react.ClassAttributes<HTMLTextAreaElement> & react.TextareaHTMLAttributes<HTMLTextAreaElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTextAreaElement> & react.TextareaHTMLAttributes<HTMLTextAreaElement> & PropsType_317, "className"> & {
        className?: ClassNamesInput;
    }>);
    tfoot: (<PropsType_318 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_318 & react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement> & PropsType_318, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_319 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement> & PropsType_319, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_320 = {}>(func: ClassNamesInput | ((props: PropsType_320 & react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement> & PropsType_320, "className"> & {
        className?: ClassNamesInput;
    }>);
    th: (<PropsType_321 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_321 & react.ClassAttributes<HTMLTableHeaderCellElement> & react.ThHTMLAttributes<HTMLTableHeaderCellElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableHeaderCellElement> & react.ThHTMLAttributes<HTMLTableHeaderCellElement> & PropsType_321, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_322 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTableHeaderCellElement> & react.ThHTMLAttributes<HTMLTableHeaderCellElement> & PropsType_322, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_323 = {}>(func: ClassNamesInput | ((props: PropsType_323 & react.ClassAttributes<HTMLTableHeaderCellElement> & react.ThHTMLAttributes<HTMLTableHeaderCellElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableHeaderCellElement> & react.ThHTMLAttributes<HTMLTableHeaderCellElement> & PropsType_323, "className"> & {
        className?: ClassNamesInput;
    }>);
    thead: (<PropsType_324 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_324 & react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement> & PropsType_324, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_325 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement> & PropsType_325, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_326 = {}>(func: ClassNamesInput | ((props: PropsType_326 & react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableSectionElement> & react.HTMLAttributes<HTMLTableSectionElement> & PropsType_326, "className"> & {
        className?: ClassNamesInput;
    }>);
    time: (<PropsType_327 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_327 & react.ClassAttributes<HTMLTimeElement> & react.TimeHTMLAttributes<HTMLTimeElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTimeElement> & react.TimeHTMLAttributes<HTMLTimeElement> & PropsType_327, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_328 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTimeElement> & react.TimeHTMLAttributes<HTMLTimeElement> & PropsType_328, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_329 = {}>(func: ClassNamesInput | ((props: PropsType_329 & react.ClassAttributes<HTMLTimeElement> & react.TimeHTMLAttributes<HTMLTimeElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTimeElement> & react.TimeHTMLAttributes<HTMLTimeElement> & PropsType_329, "className"> & {
        className?: ClassNamesInput;
    }>);
    title: (<PropsType_330 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_330 & react.ClassAttributes<HTMLTitleElement> & react.HTMLAttributes<HTMLTitleElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTitleElement> & react.HTMLAttributes<HTMLTitleElement> & PropsType_330, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_331 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTitleElement> & react.HTMLAttributes<HTMLTitleElement> & PropsType_331, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_332 = {}>(func: ClassNamesInput | ((props: PropsType_332 & react.ClassAttributes<HTMLTitleElement> & react.HTMLAttributes<HTMLTitleElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTitleElement> & react.HTMLAttributes<HTMLTitleElement> & PropsType_332, "className"> & {
        className?: ClassNamesInput;
    }>);
    tr: (<PropsType_333 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_333 & react.ClassAttributes<HTMLTableRowElement> & react.HTMLAttributes<HTMLTableRowElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableRowElement> & react.HTMLAttributes<HTMLTableRowElement> & PropsType_333, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_334 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTableRowElement> & react.HTMLAttributes<HTMLTableRowElement> & PropsType_334, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_335 = {}>(func: ClassNamesInput | ((props: PropsType_335 & react.ClassAttributes<HTMLTableRowElement> & react.HTMLAttributes<HTMLTableRowElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTableRowElement> & react.HTMLAttributes<HTMLTableRowElement> & PropsType_335, "className"> & {
        className?: ClassNamesInput;
    }>);
    track: (<PropsType_336 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_336 & react.ClassAttributes<HTMLTrackElement> & react.TrackHTMLAttributes<HTMLTrackElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLTrackElement> & react.TrackHTMLAttributes<HTMLTrackElement> & PropsType_336, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_337 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLTrackElement> & react.TrackHTMLAttributes<HTMLTrackElement> & PropsType_337, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_338 = {}>(func: ClassNamesInput | ((props: PropsType_338 & react.ClassAttributes<HTMLTrackElement> & react.TrackHTMLAttributes<HTMLTrackElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLTrackElement> & react.TrackHTMLAttributes<HTMLTrackElement> & PropsType_338, "className"> & {
        className?: ClassNamesInput;
    }>);
    u: (<PropsType_339 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_339 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_339, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_340 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_340, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_341 = {}>(func: ClassNamesInput | ((props: PropsType_341 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_341, "className"> & {
        className?: ClassNamesInput;
    }>);
    ul: (<PropsType_342 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_342 & react.ClassAttributes<HTMLUListElement> & react.HTMLAttributes<HTMLUListElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLUListElement> & react.HTMLAttributes<HTMLUListElement> & PropsType_342, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_343 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLUListElement> & react.HTMLAttributes<HTMLUListElement> & PropsType_343, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_344 = {}>(func: ClassNamesInput | ((props: PropsType_344 & react.ClassAttributes<HTMLUListElement> & react.HTMLAttributes<HTMLUListElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLUListElement> & react.HTMLAttributes<HTMLUListElement> & PropsType_344, "className"> & {
        className?: ClassNamesInput;
    }>);
    var: (<PropsType_345 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_345 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_345, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_346 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_346, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_347 = {}>(func: ClassNamesInput | ((props: PropsType_347 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_347, "className"> & {
        className?: ClassNamesInput;
    }>);
    video: (<PropsType_348 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_348 & react.ClassAttributes<HTMLVideoElement> & react.VideoHTMLAttributes<HTMLVideoElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLVideoElement> & react.VideoHTMLAttributes<HTMLVideoElement> & PropsType_348, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_349 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLVideoElement> & react.VideoHTMLAttributes<HTMLVideoElement> & PropsType_349, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_350 = {}>(func: ClassNamesInput | ((props: PropsType_350 & react.ClassAttributes<HTMLVideoElement> & react.VideoHTMLAttributes<HTMLVideoElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLVideoElement> & react.VideoHTMLAttributes<HTMLVideoElement> & PropsType_350, "className"> & {
        className?: ClassNamesInput;
    }>);
    wbr: (<PropsType_351 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_351 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_351, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_352 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_352, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_353 = {}>(func: ClassNamesInput | ((props: PropsType_353 & react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLElement> & react.HTMLAttributes<HTMLElement> & PropsType_353, "className"> & {
        className?: ClassNamesInput;
    }>);
    webview: (<PropsType_354 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_354 & react.ClassAttributes<HTMLWebViewElement> & react.WebViewHTMLAttributes<HTMLWebViewElement>) => string))[]) => FunctionComponent<Omit<react.ClassAttributes<HTMLWebViewElement> & react.WebViewHTMLAttributes<HTMLWebViewElement> & PropsType_354, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_355 = {}>() => FunctionComponent<Omit<react.ClassAttributes<HTMLWebViewElement> & react.WebViewHTMLAttributes<HTMLWebViewElement> & PropsType_355, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_356 = {}>(func: ClassNamesInput | ((props: PropsType_356 & react.ClassAttributes<HTMLWebViewElement> & react.WebViewHTMLAttributes<HTMLWebViewElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.ClassAttributes<HTMLWebViewElement> & react.WebViewHTMLAttributes<HTMLWebViewElement> & PropsType_356, "className"> & {
        className?: ClassNamesInput;
    }>);
    svg: (<PropsType_357 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_357 & react.SVGProps<SVGSVGElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGSVGElement> & PropsType_357, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_358 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGSVGElement> & PropsType_358, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_359 = {}>(func: ClassNamesInput | ((props: PropsType_359 & react.SVGProps<SVGSVGElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGSVGElement> & PropsType_359, "className"> & {
        className?: ClassNamesInput;
    }>);
    animate: (<PropsType_360 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_360 & react.SVGProps<SVGElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_360, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_361 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_361, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_362 = {}>(func: ClassNamesInput | ((props: PropsType_362 & react.SVGProps<SVGElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_362, "className"> & {
        className?: ClassNamesInput;
    }>);
    animateMotion: (<PropsType_363 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_363 & react.SVGProps<SVGElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_363, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_364 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_364, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_365 = {}>(func: ClassNamesInput | ((props: PropsType_365 & react.SVGProps<SVGElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_365, "className"> & {
        className?: ClassNamesInput;
    }>);
    animateTransform: (<PropsType_366 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_366 & react.SVGProps<SVGElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_366, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_367 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_367, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_368 = {}>(func: ClassNamesInput | ((props: PropsType_368 & react.SVGProps<SVGElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_368, "className"> & {
        className?: ClassNamesInput;
    }>);
    circle: (<PropsType_369 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_369 & react.SVGProps<SVGCircleElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGCircleElement> & PropsType_369, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_370 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGCircleElement> & PropsType_370, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_371 = {}>(func: ClassNamesInput | ((props: PropsType_371 & react.SVGProps<SVGCircleElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGCircleElement> & PropsType_371, "className"> & {
        className?: ClassNamesInput;
    }>);
    clipPath: (<PropsType_372 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_372 & react.SVGProps<SVGClipPathElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGClipPathElement> & PropsType_372, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_373 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGClipPathElement> & PropsType_373, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_374 = {}>(func: ClassNamesInput | ((props: PropsType_374 & react.SVGProps<SVGClipPathElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGClipPathElement> & PropsType_374, "className"> & {
        className?: ClassNamesInput;
    }>);
    defs: (<PropsType_375 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_375 & react.SVGProps<SVGDefsElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGDefsElement> & PropsType_375, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_376 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGDefsElement> & PropsType_376, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_377 = {}>(func: ClassNamesInput | ((props: PropsType_377 & react.SVGProps<SVGDefsElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGDefsElement> & PropsType_377, "className"> & {
        className?: ClassNamesInput;
    }>);
    desc: (<PropsType_378 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_378 & react.SVGProps<SVGDescElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGDescElement> & PropsType_378, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_379 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGDescElement> & PropsType_379, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_380 = {}>(func: ClassNamesInput | ((props: PropsType_380 & react.SVGProps<SVGDescElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGDescElement> & PropsType_380, "className"> & {
        className?: ClassNamesInput;
    }>);
    ellipse: (<PropsType_381 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_381 & react.SVGProps<SVGEllipseElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGEllipseElement> & PropsType_381, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_382 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGEllipseElement> & PropsType_382, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_383 = {}>(func: ClassNamesInput | ((props: PropsType_383 & react.SVGProps<SVGEllipseElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGEllipseElement> & PropsType_383, "className"> & {
        className?: ClassNamesInput;
    }>);
    feBlend: (<PropsType_384 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_384 & react.SVGProps<SVGFEBlendElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEBlendElement> & PropsType_384, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_385 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEBlendElement> & PropsType_385, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_386 = {}>(func: ClassNamesInput | ((props: PropsType_386 & react.SVGProps<SVGFEBlendElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEBlendElement> & PropsType_386, "className"> & {
        className?: ClassNamesInput;
    }>);
    feColorMatrix: (<PropsType_387 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_387 & react.SVGProps<SVGFEColorMatrixElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEColorMatrixElement> & PropsType_387, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_388 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEColorMatrixElement> & PropsType_388, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_389 = {}>(func: ClassNamesInput | ((props: PropsType_389 & react.SVGProps<SVGFEColorMatrixElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEColorMatrixElement> & PropsType_389, "className"> & {
        className?: ClassNamesInput;
    }>);
    feComponentTransfer: (<PropsType_390 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_390 & react.SVGProps<SVGFEComponentTransferElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEComponentTransferElement> & PropsType_390, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_391 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEComponentTransferElement> & PropsType_391, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_392 = {}>(func: ClassNamesInput | ((props: PropsType_392 & react.SVGProps<SVGFEComponentTransferElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEComponentTransferElement> & PropsType_392, "className"> & {
        className?: ClassNamesInput;
    }>);
    feComposite: (<PropsType_393 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_393 & react.SVGProps<SVGFECompositeElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFECompositeElement> & PropsType_393, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_394 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFECompositeElement> & PropsType_394, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_395 = {}>(func: ClassNamesInput | ((props: PropsType_395 & react.SVGProps<SVGFECompositeElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFECompositeElement> & PropsType_395, "className"> & {
        className?: ClassNamesInput;
    }>);
    feConvolveMatrix: (<PropsType_396 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_396 & react.SVGProps<SVGFEConvolveMatrixElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEConvolveMatrixElement> & PropsType_396, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_397 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEConvolveMatrixElement> & PropsType_397, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_398 = {}>(func: ClassNamesInput | ((props: PropsType_398 & react.SVGProps<SVGFEConvolveMatrixElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEConvolveMatrixElement> & PropsType_398, "className"> & {
        className?: ClassNamesInput;
    }>);
    feDiffuseLighting: (<PropsType_399 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_399 & react.SVGProps<SVGFEDiffuseLightingElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEDiffuseLightingElement> & PropsType_399, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_400 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEDiffuseLightingElement> & PropsType_400, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_401 = {}>(func: ClassNamesInput | ((props: PropsType_401 & react.SVGProps<SVGFEDiffuseLightingElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEDiffuseLightingElement> & PropsType_401, "className"> & {
        className?: ClassNamesInput;
    }>);
    feDisplacementMap: (<PropsType_402 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_402 & react.SVGProps<SVGFEDisplacementMapElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEDisplacementMapElement> & PropsType_402, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_403 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEDisplacementMapElement> & PropsType_403, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_404 = {}>(func: ClassNamesInput | ((props: PropsType_404 & react.SVGProps<SVGFEDisplacementMapElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEDisplacementMapElement> & PropsType_404, "className"> & {
        className?: ClassNamesInput;
    }>);
    feDistantLight: (<PropsType_405 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_405 & react.SVGProps<SVGFEDistantLightElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEDistantLightElement> & PropsType_405, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_406 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEDistantLightElement> & PropsType_406, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_407 = {}>(func: ClassNamesInput | ((props: PropsType_407 & react.SVGProps<SVGFEDistantLightElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEDistantLightElement> & PropsType_407, "className"> & {
        className?: ClassNamesInput;
    }>);
    feDropShadow: (<PropsType_408 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_408 & react.SVGProps<SVGFEDropShadowElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEDropShadowElement> & PropsType_408, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_409 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEDropShadowElement> & PropsType_409, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_410 = {}>(func: ClassNamesInput | ((props: PropsType_410 & react.SVGProps<SVGFEDropShadowElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEDropShadowElement> & PropsType_410, "className"> & {
        className?: ClassNamesInput;
    }>);
    feFlood: (<PropsType_411 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_411 & react.SVGProps<SVGFEFloodElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEFloodElement> & PropsType_411, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_412 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEFloodElement> & PropsType_412, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_413 = {}>(func: ClassNamesInput | ((props: PropsType_413 & react.SVGProps<SVGFEFloodElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEFloodElement> & PropsType_413, "className"> & {
        className?: ClassNamesInput;
    }>);
    feFuncA: (<PropsType_414 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_414 & react.SVGProps<SVGFEFuncAElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEFuncAElement> & PropsType_414, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_415 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEFuncAElement> & PropsType_415, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_416 = {}>(func: ClassNamesInput | ((props: PropsType_416 & react.SVGProps<SVGFEFuncAElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEFuncAElement> & PropsType_416, "className"> & {
        className?: ClassNamesInput;
    }>);
    feFuncB: (<PropsType_417 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_417 & react.SVGProps<SVGFEFuncBElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEFuncBElement> & PropsType_417, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_418 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEFuncBElement> & PropsType_418, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_419 = {}>(func: ClassNamesInput | ((props: PropsType_419 & react.SVGProps<SVGFEFuncBElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEFuncBElement> & PropsType_419, "className"> & {
        className?: ClassNamesInput;
    }>);
    feFuncG: (<PropsType_420 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_420 & react.SVGProps<SVGFEFuncGElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEFuncGElement> & PropsType_420, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_421 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEFuncGElement> & PropsType_421, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_422 = {}>(func: ClassNamesInput | ((props: PropsType_422 & react.SVGProps<SVGFEFuncGElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEFuncGElement> & PropsType_422, "className"> & {
        className?: ClassNamesInput;
    }>);
    feFuncR: (<PropsType_423 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_423 & react.SVGProps<SVGFEFuncRElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEFuncRElement> & PropsType_423, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_424 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEFuncRElement> & PropsType_424, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_425 = {}>(func: ClassNamesInput | ((props: PropsType_425 & react.SVGProps<SVGFEFuncRElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEFuncRElement> & PropsType_425, "className"> & {
        className?: ClassNamesInput;
    }>);
    feGaussianBlur: (<PropsType_426 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_426 & react.SVGProps<SVGFEGaussianBlurElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEGaussianBlurElement> & PropsType_426, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_427 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEGaussianBlurElement> & PropsType_427, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_428 = {}>(func: ClassNamesInput | ((props: PropsType_428 & react.SVGProps<SVGFEGaussianBlurElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEGaussianBlurElement> & PropsType_428, "className"> & {
        className?: ClassNamesInput;
    }>);
    feImage: (<PropsType_429 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_429 & react.SVGProps<SVGFEImageElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEImageElement> & PropsType_429, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_430 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEImageElement> & PropsType_430, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_431 = {}>(func: ClassNamesInput | ((props: PropsType_431 & react.SVGProps<SVGFEImageElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEImageElement> & PropsType_431, "className"> & {
        className?: ClassNamesInput;
    }>);
    feMerge: (<PropsType_432 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_432 & react.SVGProps<SVGFEMergeElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEMergeElement> & PropsType_432, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_433 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEMergeElement> & PropsType_433, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_434 = {}>(func: ClassNamesInput | ((props: PropsType_434 & react.SVGProps<SVGFEMergeElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEMergeElement> & PropsType_434, "className"> & {
        className?: ClassNamesInput;
    }>);
    feMergeNode: (<PropsType_435 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_435 & react.SVGProps<SVGFEMergeNodeElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEMergeNodeElement> & PropsType_435, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_436 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEMergeNodeElement> & PropsType_436, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_437 = {}>(func: ClassNamesInput | ((props: PropsType_437 & react.SVGProps<SVGFEMergeNodeElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEMergeNodeElement> & PropsType_437, "className"> & {
        className?: ClassNamesInput;
    }>);
    feMorphology: (<PropsType_438 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_438 & react.SVGProps<SVGFEMorphologyElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEMorphologyElement> & PropsType_438, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_439 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEMorphologyElement> & PropsType_439, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_440 = {}>(func: ClassNamesInput | ((props: PropsType_440 & react.SVGProps<SVGFEMorphologyElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEMorphologyElement> & PropsType_440, "className"> & {
        className?: ClassNamesInput;
    }>);
    feOffset: (<PropsType_441 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_441 & react.SVGProps<SVGFEOffsetElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEOffsetElement> & PropsType_441, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_442 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEOffsetElement> & PropsType_442, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_443 = {}>(func: ClassNamesInput | ((props: PropsType_443 & react.SVGProps<SVGFEOffsetElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEOffsetElement> & PropsType_443, "className"> & {
        className?: ClassNamesInput;
    }>);
    fePointLight: (<PropsType_444 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_444 & react.SVGProps<SVGFEPointLightElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFEPointLightElement> & PropsType_444, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_445 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFEPointLightElement> & PropsType_445, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_446 = {}>(func: ClassNamesInput | ((props: PropsType_446 & react.SVGProps<SVGFEPointLightElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFEPointLightElement> & PropsType_446, "className"> & {
        className?: ClassNamesInput;
    }>);
    feSpecularLighting: (<PropsType_447 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_447 & react.SVGProps<SVGFESpecularLightingElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFESpecularLightingElement> & PropsType_447, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_448 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFESpecularLightingElement> & PropsType_448, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_449 = {}>(func: ClassNamesInput | ((props: PropsType_449 & react.SVGProps<SVGFESpecularLightingElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFESpecularLightingElement> & PropsType_449, "className"> & {
        className?: ClassNamesInput;
    }>);
    feSpotLight: (<PropsType_450 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_450 & react.SVGProps<SVGFESpotLightElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFESpotLightElement> & PropsType_450, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_451 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFESpotLightElement> & PropsType_451, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_452 = {}>(func: ClassNamesInput | ((props: PropsType_452 & react.SVGProps<SVGFESpotLightElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFESpotLightElement> & PropsType_452, "className"> & {
        className?: ClassNamesInput;
    }>);
    feTile: (<PropsType_453 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_453 & react.SVGProps<SVGFETileElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFETileElement> & PropsType_453, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_454 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFETileElement> & PropsType_454, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_455 = {}>(func: ClassNamesInput | ((props: PropsType_455 & react.SVGProps<SVGFETileElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFETileElement> & PropsType_455, "className"> & {
        className?: ClassNamesInput;
    }>);
    feTurbulence: (<PropsType_456 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_456 & react.SVGProps<SVGFETurbulenceElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFETurbulenceElement> & PropsType_456, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_457 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFETurbulenceElement> & PropsType_457, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_458 = {}>(func: ClassNamesInput | ((props: PropsType_458 & react.SVGProps<SVGFETurbulenceElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFETurbulenceElement> & PropsType_458, "className"> & {
        className?: ClassNamesInput;
    }>);
    filter: (<PropsType_459 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_459 & react.SVGProps<SVGFilterElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGFilterElement> & PropsType_459, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_460 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGFilterElement> & PropsType_460, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_461 = {}>(func: ClassNamesInput | ((props: PropsType_461 & react.SVGProps<SVGFilterElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGFilterElement> & PropsType_461, "className"> & {
        className?: ClassNamesInput;
    }>);
    foreignObject: (<PropsType_462 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_462 & react.SVGProps<SVGForeignObjectElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGForeignObjectElement> & PropsType_462, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_463 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGForeignObjectElement> & PropsType_463, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_464 = {}>(func: ClassNamesInput | ((props: PropsType_464 & react.SVGProps<SVGForeignObjectElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGForeignObjectElement> & PropsType_464, "className"> & {
        className?: ClassNamesInput;
    }>);
    g: (<PropsType_465 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_465 & react.SVGProps<SVGGElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGGElement> & PropsType_465, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_466 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGGElement> & PropsType_466, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_467 = {}>(func: ClassNamesInput | ((props: PropsType_467 & react.SVGProps<SVGGElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGGElement> & PropsType_467, "className"> & {
        className?: ClassNamesInput;
    }>);
    image: (<PropsType_468 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_468 & react.SVGProps<SVGImageElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGImageElement> & PropsType_468, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_469 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGImageElement> & PropsType_469, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_470 = {}>(func: ClassNamesInput | ((props: PropsType_470 & react.SVGProps<SVGImageElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGImageElement> & PropsType_470, "className"> & {
        className?: ClassNamesInput;
    }>);
    line: (<PropsType_471 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_471 & react.SVGProps<SVGLineElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGLineElement> & PropsType_471, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_472 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGLineElement> & PropsType_472, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_473 = {}>(func: ClassNamesInput | ((props: PropsType_473 & react.SVGProps<SVGLineElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGLineElement> & PropsType_473, "className"> & {
        className?: ClassNamesInput;
    }>);
    linearGradient: (<PropsType_474 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_474 & react.SVGProps<SVGLinearGradientElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGLinearGradientElement> & PropsType_474, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_475 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGLinearGradientElement> & PropsType_475, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_476 = {}>(func: ClassNamesInput | ((props: PropsType_476 & react.SVGProps<SVGLinearGradientElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGLinearGradientElement> & PropsType_476, "className"> & {
        className?: ClassNamesInput;
    }>);
    marker: (<PropsType_477 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_477 & react.SVGProps<SVGMarkerElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGMarkerElement> & PropsType_477, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_478 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGMarkerElement> & PropsType_478, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_479 = {}>(func: ClassNamesInput | ((props: PropsType_479 & react.SVGProps<SVGMarkerElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGMarkerElement> & PropsType_479, "className"> & {
        className?: ClassNamesInput;
    }>);
    mask: (<PropsType_480 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_480 & react.SVGProps<SVGMaskElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGMaskElement> & PropsType_480, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_481 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGMaskElement> & PropsType_481, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_482 = {}>(func: ClassNamesInput | ((props: PropsType_482 & react.SVGProps<SVGMaskElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGMaskElement> & PropsType_482, "className"> & {
        className?: ClassNamesInput;
    }>);
    metadata: (<PropsType_483 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_483 & react.SVGProps<SVGMetadataElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGMetadataElement> & PropsType_483, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_484 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGMetadataElement> & PropsType_484, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_485 = {}>(func: ClassNamesInput | ((props: PropsType_485 & react.SVGProps<SVGMetadataElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGMetadataElement> & PropsType_485, "className"> & {
        className?: ClassNamesInput;
    }>);
    mpath: (<PropsType_486 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_486 & react.SVGProps<SVGElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_486, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_487 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_487, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_488 = {}>(func: ClassNamesInput | ((props: PropsType_488 & react.SVGProps<SVGElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGElement> & PropsType_488, "className"> & {
        className?: ClassNamesInput;
    }>);
    path: (<PropsType_489 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_489 & react.SVGProps<SVGPathElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGPathElement> & PropsType_489, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_490 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGPathElement> & PropsType_490, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_491 = {}>(func: ClassNamesInput | ((props: PropsType_491 & react.SVGProps<SVGPathElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGPathElement> & PropsType_491, "className"> & {
        className?: ClassNamesInput;
    }>);
    pattern: (<PropsType_492 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_492 & react.SVGProps<SVGPatternElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGPatternElement> & PropsType_492, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_493 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGPatternElement> & PropsType_493, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_494 = {}>(func: ClassNamesInput | ((props: PropsType_494 & react.SVGProps<SVGPatternElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGPatternElement> & PropsType_494, "className"> & {
        className?: ClassNamesInput;
    }>);
    polygon: (<PropsType_495 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_495 & react.SVGProps<SVGPolygonElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGPolygonElement> & PropsType_495, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_496 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGPolygonElement> & PropsType_496, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_497 = {}>(func: ClassNamesInput | ((props: PropsType_497 & react.SVGProps<SVGPolygonElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGPolygonElement> & PropsType_497, "className"> & {
        className?: ClassNamesInput;
    }>);
    polyline: (<PropsType_498 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_498 & react.SVGProps<SVGPolylineElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGPolylineElement> & PropsType_498, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_499 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGPolylineElement> & PropsType_499, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_500 = {}>(func: ClassNamesInput | ((props: PropsType_500 & react.SVGProps<SVGPolylineElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGPolylineElement> & PropsType_500, "className"> & {
        className?: ClassNamesInput;
    }>);
    radialGradient: (<PropsType_501 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_501 & react.SVGProps<SVGRadialGradientElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGRadialGradientElement> & PropsType_501, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_502 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGRadialGradientElement> & PropsType_502, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_503 = {}>(func: ClassNamesInput | ((props: PropsType_503 & react.SVGProps<SVGRadialGradientElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGRadialGradientElement> & PropsType_503, "className"> & {
        className?: ClassNamesInput;
    }>);
    rect: (<PropsType_504 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_504 & react.SVGProps<SVGRectElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGRectElement> & PropsType_504, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_505 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGRectElement> & PropsType_505, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_506 = {}>(func: ClassNamesInput | ((props: PropsType_506 & react.SVGProps<SVGRectElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGRectElement> & PropsType_506, "className"> & {
        className?: ClassNamesInput;
    }>);
    stop: (<PropsType_507 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_507 & react.SVGProps<SVGStopElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGStopElement> & PropsType_507, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_508 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGStopElement> & PropsType_508, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_509 = {}>(func: ClassNamesInput | ((props: PropsType_509 & react.SVGProps<SVGStopElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGStopElement> & PropsType_509, "className"> & {
        className?: ClassNamesInput;
    }>);
    switch: (<PropsType_510 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_510 & react.SVGProps<SVGSwitchElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGSwitchElement> & PropsType_510, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_511 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGSwitchElement> & PropsType_511, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_512 = {}>(func: ClassNamesInput | ((props: PropsType_512 & react.SVGProps<SVGSwitchElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGSwitchElement> & PropsType_512, "className"> & {
        className?: ClassNamesInput;
    }>);
    text: (<PropsType_513 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_513 & react.SVGProps<SVGTextElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGTextElement> & PropsType_513, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_514 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGTextElement> & PropsType_514, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_515 = {}>(func: ClassNamesInput | ((props: PropsType_515 & react.SVGProps<SVGTextElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGTextElement> & PropsType_515, "className"> & {
        className?: ClassNamesInput;
    }>);
    textPath: (<PropsType_516 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_516 & react.SVGProps<SVGTextPathElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGTextPathElement> & PropsType_516, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_517 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGTextPathElement> & PropsType_517, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_518 = {}>(func: ClassNamesInput | ((props: PropsType_518 & react.SVGProps<SVGTextPathElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGTextPathElement> & PropsType_518, "className"> & {
        className?: ClassNamesInput;
    }>);
    tspan: (<PropsType_519 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_519 & react.SVGProps<SVGTSpanElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGTSpanElement> & PropsType_519, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_520 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGTSpanElement> & PropsType_520, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_521 = {}>(func: ClassNamesInput | ((props: PropsType_521 & react.SVGProps<SVGTSpanElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGTSpanElement> & PropsType_521, "className"> & {
        className?: ClassNamesInput;
    }>);
    use: (<PropsType_522 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_522 & react.SVGProps<SVGUseElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGUseElement> & PropsType_522, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_523 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGUseElement> & PropsType_523, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_524 = {}>(func: ClassNamesInput | ((props: PropsType_524 & react.SVGProps<SVGUseElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGUseElement> & PropsType_524, "className"> & {
        className?: ClassNamesInput;
    }>);
    view: (<PropsType_525 = {}>(strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_525 & react.SVGProps<SVGViewElement>) => string))[]) => FunctionComponent<Omit<react.SVGProps<SVGViewElement> & PropsType_525, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_526 = {}>() => FunctionComponent<Omit<react.SVGProps<SVGViewElement> & PropsType_526, "className"> & {
        className?: ClassNamesInput;
    }>) & (<PropsType_527 = {}>(func: ClassNamesInput | ((props: PropsType_527 & react.SVGProps<SVGViewElement>) => ClassNamesInput)) => FunctionComponent<Omit<react.SVGProps<SVGViewElement> & PropsType_527, "className"> & {
        className?: ClassNamesInput;
    }>);
} & ((strings: TemplateStringsArray, ...expressions: ClassNamesInput[]) => string) & (<PropsType_528 extends {
    className?: string;
}>(comp: (props: PropsType_528) => ReactNode) => (strings: TemplateStringsArray, ...expressions: (ClassNamesInput | ((props: PropsType_528) => string))[]) => FunctionComponent<PropsType_528>);

export { Zwilling };
