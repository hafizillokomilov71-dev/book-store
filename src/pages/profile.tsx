import Button from "../components/ui/button";
import Input from "../components/ui/input";

const mockForm = {
  register: (_name: string) => ({}),
};

const navItems = [
  { icon: "📊", label: "Overview", active: false },
  { icon: "✏️", label: "Edit Profile", active: true },
  { icon: "🔒", label: "Change Password", active: false },
  { icon: "📚", label: "My Books", active: false },
  { icon: "❤️", label: "Favorites", active: false },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex">
      {/* Sidebar */}
      <aside className="w-52 shrink-0 border-r border-gray-200 pt-10 px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center text-white text-3xl font-semibold mb-3">
            Z
          </div>
          <p className="font-semibold text-gray-800 text-sm">Zayniddin</p>
          <p className="text-xs text-gray-500 mt-0.5">Member since 2024</p>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${
                item.active
                  ? "bg-green-100 text-gray-800 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-12 py-10">
        <h1 className="text-2xl font-semibold text-gray-800 mb-1">
          Edit Profile
        </h1>
        <p className="text-sm text-gray-500 mb-7">
          Update your personal information
        </p>

        {/* Photo Upload */}
        <div className="mb-7">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
            <span className="text-2xl">📷</span>
            <span className="text-[11px] text-gray-500 mt-1">Upload photo</span>
          </div>
        </div>

        {/* Row 1: Full name + Username */}
        <div className="grid grid-cols-2 gap-5 mb-4">
          <Input
            type="text"
            name="fullName"
            placeholder="Zayniddin"
            label="Full name"
            form={mockForm}
          />
          <Input
            type="text"
            name="username"
            placeholder="zayniddin_dev"
            label="Username"
            form={mockForm}
          />
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid grid-cols-2 gap-5 mb-4">
          <Input
            type="email"
            name="email"
            placeholder="zayniddin@example.com"
            label="Email address"
            form={mockForm}
          />
          <Input
            type="tel"
            name="phone"
            placeholder="+998 90 123 4567"
            label="Phone"
            form={mockForm}
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="text-[#4A4A4A] text-sm">
            Bio
            <textarea
              placeholder="JavaScript instructor passionate about teaching and building web applications."
              className="w-full mt-1.5 bg-white px-7 py-3 focus:outline-none rounded-[10px] border border-[#B4B4BB] resize-none h-24 text-sm"
            />
          </label>
        </div>

        {/* Country */}
        <div className="mb-8 w-1/2 pr-2.5">
          <Input
            type="text"
            name="country"
            placeholder="Uzbekistan"
            label="Country"
            form={mockForm}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            type="submit"
            className="bg-gray-900 text-white px-5 py-2.5 rounded-lg"
          >
            Save Changes
          </Button>
          <Button
            type="button"
            color="light"
            className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg"
          >
            Cancel
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
