/**
 * @flow
 */
'use babel';
import clouds from 'Images/image.png';

const img = document.createElement( 'img' );
img.src = clouds;

if ( document.body )
  document.body.appendChild( img );
