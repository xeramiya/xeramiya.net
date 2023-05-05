type Attribute = {
  className?: string;
};

export const XeramiyaLogo = (attribute: Attribute) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={attribute.className}
      >
        <path
          id="X-Tale"
          d="M11.648,14.163l-6.027,6.026l-3.621,0l6.027,-6.026l3.621,-0"
        />
        <path
          id="X-Holn"
          d="M22,3.811l-10.352,10.352l-1.205,-2.417l7.936,-7.935l3.621,-0Z"
        />
        <path
          id="X-Slash"
          d="M6.816,4.472l7.507,15.056l2.861,0l-7.507,-15.056l-2.861,-0Z"
        />
      </svg>
    </>
  );
}
