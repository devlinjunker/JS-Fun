/**
 * @flow
 *
 * Entrypoint for application, this is where it all starts
 */
'use babel';
import '../app.css';

interface AppParams {
  test: string;
}

/**
  * Runs the entire application so far
  *
  * @param {MainParams} params input to app
  * @returns {void}
  */
function main ( { test } : AppParams ) : void {
  const f = () => {
    // eslint-disable-next-line
    console.log( 'hello World 22 ' + test );
  };
  f();
}

main( { test: '2' } );

export default main;
