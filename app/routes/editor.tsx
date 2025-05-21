export default function StoryblokAdmin() {
  return (
    <div className="w-full flex flex-col">
      <div id="app"></div>

      <script type="text/javascript">
        STORYBLOK_PREVIEW_URL = 'http://localhost:3000/'
      </script>
      <script
        src="https://app.storyblok.com/f/app-latest.js"
        type="text/javascript"
      ></script>
    </div>
  );
}
