import NextAuth from "next-auth"
import mongoose from "mongoose";
// import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import User from "@/models/User";
import Payment from "@/models/Payment";


const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        // connect to the database
        await mongoose.connect(process.env.MONGO_URI)
        // check if the user already exists in the database
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          // create a new user if it doesn't exist
          const newUser = new User({
            name: user.name,
            email: user.email,
            image: user.image,
            username: user.email.split("@")[0],
            razorpayId: "",
            razorpaySecret: "",
          })
          await newUser.save()
        }
        return true
      }
    }
  }
})

export { handler as GET, handler as POST }
