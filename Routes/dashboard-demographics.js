const router = require("express").Router();
const demographic_dashboard_controller = require("../Controllers/dashboard-demographics");

router.get("/marital-status", demographic_dashboard_controller.getMaritalStatusByVillage);
router.get("/diet-pattern", demographic_dashboard_controller.getDietShareByVillageAndOptionalGender);
router.get("/bmi-distribution", demographic_dashboard_controller.getBMIDistributionByVillageAndOptionalGender);
router.get("/chronic-disease-prevalence", demographic_dashboard_controller.getChronicDiseasePrevalence);
router.get("/income-range", demographic_dashboard_controller.getIncomeRangeByAgeAndOptionalGender);
router.get("/motor-disability", demographic_dashboard_controller.getMotorDisabilityPrevalenceByVillageAndOptionalGender);
module.exports = router;
