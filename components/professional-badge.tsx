import { Shield, Award, CheckCircle } from "lucide-react"

export function ProfessionalBadge() {
  return (
    <div className="bg-white border border-blue-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Licensed & Verified</span>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">15+ Years Trusted</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">500+ Satisfied Clients</span>
        </div>
      </div>
    </div>
  )
}
