import { useTranslations } from "next-intl";
import PolicyLayout from "@/components/PolicyLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DeleteAccount() {
  const t = useTranslations("DeleteAccount");

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <PolicyLayout title={t("title")}>
        <p className="mb-6">{t("intro")}</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">{t("methods.title")}</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-1">
                  {t("methods.inApp.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("methods.inApp.desc")}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-1">
                  {t("methods.email.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("methods.email.desc")}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              {t("deletedData.title")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {(t.raw("deletedData.list") as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              {t("retainedData.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t("retainedData.desc")}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              {t("processingTime.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t("processingTime.desc")}
            </p>
          </div>
        </section>
      </PolicyLayout>
      <Footer />
    </main>
  );
}
