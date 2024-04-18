import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Nom de la tâche requis"),
  description: Yup.string().required("Description de la tâche requise"),
  type: Yup.string().required("Type de tâche requis"),
  createdAt: Yup.date().nullable().required("Date est requise"),
});
