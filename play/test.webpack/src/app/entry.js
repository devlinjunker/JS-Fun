/**
 * @flow
 *
 * Entrypoint for application, this is where it all starts
 */
'use babel';

interface AppParams {
  test: string;
}

/**
  * Runs the entire application so far
  *
  * @param {MainParams} params input to app
  * @returns {number} always 22
  */
function main ( { test } : AppParams ) : number {
  const f = () => {
    // eslint-disable-next-line
    console.log( 'hello World 22 ' + test );
  };
  f();

  return 22;
}
export default main;
