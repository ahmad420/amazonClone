import { ServerStyleSheets } from '@material-ui/core';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document{
render(){
    return(
        <Html lang='en'>
            <Head>
                <body>
                    <Main/>
                     <NextScript/>
                </body>
            </Head>
        </Html>
    )
  }
}

MyDocument.getInitialProps =async (ctx)=>{
    const sheets = new ServerStyleSheets()
    const OriginalRenderPage =ctx.renderPage
    ctx.renderPage = ()=>{
       return OriginalRenderPage({
            enhanceApp:(App)=>(props)=>sheets.collect(<App{...props}/>),
        })
    }
    const initialProops =await Document.getInitialProps(ctx)
    return{
        ...initialProops,
        styles:[
            ...React.Children.toArray(initialProops.styles),
            sheets.getStyleElement(),
    ],
    }
}