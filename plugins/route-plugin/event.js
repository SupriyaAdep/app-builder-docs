import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteDidUpdate({ location, previousLocation }) {
      //added timeout due to https://github.com/facebook/docusaurus/issues/3399
      const timer = document.querySelector('pre.code-scroll') ? 300 : 0;
      console.log('timer', timer)
      window.setTimeout(() => {
        // logic for page scroll
        if (location.pathname !== previousLocation?.pathname) {
          const id = location?.hash || '';
          if (id) {
            const ele = document.querySelector(id);
            ele?.scrollIntoView();

          } else {
            document.body.scrollIntoView()
          }
        }
        // if (location.pathname !== previousLocation?.pathname) {
        //   document.querySelectorAll('.prism-code').forEach((ele) => {
        //     const scrollBy = ele.getAttribute('pos');
        //     ele?.scrollTo({ top: scrollBy, behavior: 'smooth' })
        //   })
        // }

      }, 300)

    }
  }
})();
