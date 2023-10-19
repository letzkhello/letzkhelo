import GetAllBlog from "@/components/GetAllBLog";
function BlogPage() {
    return (
      <>
   <GetAllBlog/>
      </>
    )
  }

export default BlogPage;


export function generateMetadata(){
  return{
    title:"Blogs",
    description:"Explore sports-related blogs to stay informed and inspired in the world of athletics. Dive into our captivating articles!",
    keywords:" Sports News, Athletic Insights, Training Tips, Athlete Profiles, Game Analysis, Fitness Advice, Sports Updates, Sports Blog, Sports Articles, Sportswriting, Sports Analysis, Sports Lifestyle, Sports and Wellness, Competitive Sports, Team Sports, Individu",
    robots:"index, follow",
    language:"EN",

  }
}