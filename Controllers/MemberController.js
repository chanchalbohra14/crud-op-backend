import Member from "../Model/MemberModel.js";
import asyncHandler from "express-async-handler";
export const CreateMember = async (req, res) => {
  try {
    const { Name, Age, Gender, Course, Contact, Address } = req.body;
    const member = new Member({ Name, Age, Gender, Course, Contact, Address });
    await member.save();
    res.status(201).json({ message: "member created successfully" });
  } catch (error) {
    console.log("failed to create", error.message);
    res.status(500).json(`failed to created:${error.message}`);
  }
};

export const getMembers = async (req, res) => {
  try {
    const getmembers = await Member.find();
    console.log(getmembers);
    if (!getmembers) {
      res.status(500).json("failed to fetch");
    }
    res.status(200).json(getmembers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(`failed to fetch:${error.message}`);
  }
};

export const getMember = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const getmember = await Member.findById(id);
    if (!getmember) {
      res.status(500).json({ message: "failed to fetch" });
    }
    res.status(200).json(getmember);
  } catch (error) {
    console.log(error.message);
  }
});

export const updateMember = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, Age, Gender, Course, Contact, Address } = req.body;
    const updatemember = await Member.findByIdAndUpdate(id);
    console.log(updatemember);
    if (!updatemember) {
      res.status(500).json({ message: "failed to update" });
    }
    if (Name) {
      updatemember.Name = Name;
    }
    if (Age) {
      updatemember.Age = Age;
    }
    if (Gender) {
      updatemember.Gender = Gender;
    }
    if (Course) {
      updatemember.Course = Course;
    }
    if (Contact) {
      updatemember.Contact = Contact;
    }
    if (Address) {
      updatemember.Address = Address;
    }
    res.status(200).json(updatemember);
    await updatemember.save();
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteMember = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletemember = await Member.findByIdAndDelete(id);
    if (!deletemember) {
      res.status(404).json({ message: "failed to delete" });
    }
    res.status(200).json(deletemember);
  } catch (error) {
    console.log(error.message);
  }
});
