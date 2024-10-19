const Hireings = require('../model/HiringSchmea');




const addHiring = async (req, res) => {

    const { applicantId, name, jobId, status ,email } = req.body;

    if (!applicantId || !name || !jobId || !status) {
        return res.json({ msg: "Fill all the Fields" }).status(400);
    }

    try {
        const newHiring = new Hireings({
            applicantId: applicantId,
            name: name,
            jobId: jobId,
            status: status,
            email: email
        });
        newHiring.save();
        return res.json({ msg: "Hiring Added successfully", accepted: "ok" }).status(200);
    } catch (error) {
        res.json({ msg: "Hiring Failed" }).status(400);
    }
}

const getHiring = async (req, res) => {
    const allHiring = await Hireings.find();
    res.json(allHiring).status(200);
}


module.exports = { addHiring, getHiring };
