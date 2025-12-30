import mongoose, { Types } from "mongoose";
import  {roleType, genderType} from "../../enums/index";
import { IUser } from "../../interfaces/UserInterfaces/IUser";





const userschema= new mongoose.Schema<IUser>({
    fName: { type: String, required: true, trim: true, min: 2, max: 15 },
    lName: { type: String, required: true, trim: true, min: 2, max: 15 },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true , select: false },
    age: { type: Number, required: true, min: 14, max: 100 },
    phone: { type: String, unique: true,  sparse: true},
    address: { type: String },
    gender: { type: String, enum: Object.values(genderType), required: true },
    role: { type: String, enum: Object.values(roleType), required: true },
},{
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

userschema.virtual("userName")
    .set(function (value) {
        const [fName, lName=" "] = value.split(" ")
        this.set({ fName, lName })
    })
    .get(function () {
        return `${this.fName} ${this.lName}`
    })




export const userModel= mongoose.models.Users || mongoose.model<IUser>("Users",userschema)