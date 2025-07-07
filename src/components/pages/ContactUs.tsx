interface Props {}

export const ContactUs: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* banner @todo*/}
      <div className="flex max-w-[70em] flex-col gap-4 pb-20">
        <div>
          <p className="">Make the most of your time & budget!</p>
          <p>
            It can be overwhelming to start a new video project. SkySee Video is
            here to make the process easy for you. Complete this form to provide
            contact information and a quick overview of your project, and we’ll
            work with you to develop a plan that meets your budget and hits your
            target goals.
          </p>
          <p>Located in Atlanta, Georgia</p>

          <p>Email: info@skyseevideo.com</p>
          <p>Phone: 678-304-9920</p>
        </div>
      {/* form goes here */}
      </div>
    </div>
  )
}
