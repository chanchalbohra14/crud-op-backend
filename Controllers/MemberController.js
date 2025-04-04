import Member from "../Model/MemberModel.js";
//create
export const addmember = async (req, res) => {
  try {
    const { firstName, lastName, age, gender, contact, address } = req.body;
    // console.log("request body", req.body);
    // console.log("request body", req);

    const member = new Member({
      firstName,
      lastName,
      age,
      gender,
      contact,
      address,
    });

    await member.save();
    res.status(201).json({ message: "member created successfully" });
  } catch (error) {
    console.log("add member error", error.message);
    throw new Error(`error to register member:${error.message}`);
  }
};

//read
export const getAllMember = async (req, res) => {
  try {
    const getmembers = await Member.find();
    res.status(200).json(getmembers);

    console.log("get members", getmembers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(`cannot fetch members:${error.message}`);
  }
};

//fetching particular
export const getMember = async (req, res) => {
  try {
    console.log("get member", req.body);
    console.log("get params", req.params);
    const getmember1 = await Member.findById(req.params.id);
    if (!getmember1) {
      res.status(500).json(`failed to fetch:${getmember1}`);
    }
    res.status(200).json(getmember1);
  } catch (error) {
    console.log("failed to fetch", error.message);
  }
};
